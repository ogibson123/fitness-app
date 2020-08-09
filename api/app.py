from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from functools import wraps
import jwt
import datetime
from pymongo import MongoClient
from dotenv import load_dotenv
import os

app = Flask(__name__)
load_dotenv()
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
CORS(app)
client = MongoClient()
db = client["fitness"]
foodLog = db["foodLog"]
users = db["users"]

def authorizeToken(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers["Authorization"] if "Authorization" in request.headers else None

        if not token:
            return jsonify({"message": "missing token"}), 403
        try:
            data = jwt.decode(token, app.config["SECRET_KEY"])
            currentUser = data["user"]
        except:
            return jsonify({"message": "invalid token"}), 403
        
        return f(currentUser, *args, **kwargs)
    
    return decorated

@app.route("/login", methods=["POST"])
def login():
    auth = request.get_json()
    query = {"username": auth["username"], "password": auth["password"]}
    res = users.find_one(query)
    print(res)

    if res:
        token = jwt.encode(
            {"user": auth["username"], "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=45)},
            app.config["SECRET_KEY"])

        return jsonify({"token": token.decode("UTF-8")})
    else:
        return make_response(jsonify({"message": "Incorrect username or password"}), 400)

@app.route("/signup", methods=["POST"])
def signup():
    #check if the username exists already. If it does, user can't sign up
    data = request.get_json()
    query = {"username": data["username"]}
    userNameExists = users.find_one(query)
    
    if not userNameExists:
        users.insert_one({"username": data["username"], "password": data["password"], "firstName": data["firstName"]})
        token = jwt.encode(
            {"user": data["username"], "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=45)},
            app.config["SECRET_KEY"])

        return jsonify({"token": token.decode("UTF-8")})
    else:
        print("not created")
        return make_response(jsonify({"message": "A user with that username already exists"}), 400)

@app.route("/user/<username>")
@authorizeToken
def getOneUser(currentUser):
    user = users.find_one({"username": currentUser})
    return jsonify({"user": user["username"]})

#Gets a food log from a user on a certain date
@app.route("/logs/<date>", methods=["GET"])
@authorizeToken
def getLog(currentUser, date):
    print("getting log for user " + currentUser)
    print("date: " + date)
    res = foodLog.find_one({"username": currentUser, "date": date})
    print(res)
    if res:
        return make_response(jsonify({"body": res["data"]}), 200)
    else:
        return make_response(jsonify({"message": "No data found"}), 404)

#Saves a food log from the user into the database
@app.route("/logs", methods=["POST"])
@authorizeToken
def saveLog(currentUser):
    data = request.get_json()
    query = {"username": currentUser, "date": data["date"]}
    data["username"] = currentUser

    #If document exists, it will update it. Else it will create it.
    foodLog.replace_one(query, data, upsert=True)
    res = make_response(jsonify({"message": "Log saved"}), 201)
    return res


if __name__ == "__main__":
    app.run(debug=True)
