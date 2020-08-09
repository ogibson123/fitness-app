import React from "react";

class FoodLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakfast: [{ food: "", calories: "" }],
            lunch: [{ food: "", calories: "" }],
            dinner: [{ food: "", calories: "" }],
            snacks: [{ food: "", calories: "" }]
        };
    }

    //if you've filled a log for today's date, load the log
    async componentDidMount() {
        let res = await fetch(process.env.REACT_APP_API + "/logs/" + this.formatDate(), {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        
        if (res.status === 200) {
            res.json().then(data => {
                data = data.body;
                this.setState({ breakfast: data.breakfast, lunch: data.lunch, dinner: data.dinner, snacks: data.snacks })
            });
        }
        else {
            console.log(await res.json());
        }
    }

    saveLog() {
        fetch(process.env.REACT_APP_API + "/logs", {
            method: "POST",
            headers: {
                Authorization: localStorage.getItem("token"),
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ date: this.formatDate(), data: this.state })
        }).then(res => res.json()).then(data => console.log(data));
    }

    // where "type" is either food or calories
    handleChange(index, type, event) {
        let temp = [...this.state[event.target.name]];
        let value = event.target.value;
        temp[index][type] = value;
        this.setState({ [event.target.name]: temp });
    }

    addRow(tableName) {
        let temp = [...this.state[tableName], { food: "", calories: "" }];
        this.setState({ [tableName]: temp });
    }

    removeRow(index, tableName) {
        let temp = [...this.state[tableName]];
        temp = temp.filter((row, ind) => ind !== index);
        this.setState({ [tableName]: temp });
    }

    formatDate() {
        let date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        return mm+dd+yyyy;
    }

    render() {
        const generateLogEntry = (index, tableName, food, calories) =>
            <div key={index}>
                <input onChange={(e) => this.handleChange(index, "food", e)} placeholder="Food Name" value={food} name={tableName} />
                <input onChange={(e) => this.handleChange(index, "calories", e)} placeholder="Calories" name={tableName} type="number" value={calories} />
                <button onClick={() => this.removeRow(index, tableName)} className="remove-row-button">x</button>
            </div>;

        return (
            <div>
                <div id="breakfast-container">
                    <h4>Breakfast</h4>
                    {this.state.breakfast.map((row, index) => generateLogEntry(index, "breakfast", row.food, row.calories))}
                    <button onClick={() => this.addRow("breakfast")} className="add-food-button">+</button>
                </div>
                <div id="lunch-container">
                    <h4>Lunch</h4>
                    {this.state.lunch.map((row, index) => generateLogEntry(index, "lunch", row.food, row.calories))}
                    <button onClick={() => this.addRow("lunch")} className="add-food-button">+</button>
                </div>
                <div id="dinner-container">
                    <h4>Dinner</h4>
                    {this.state.dinner.map((row, index) => generateLogEntry(index, "dinner", row.food, row.calories))}
                    <button onClick={() => this.addRow("dinner")} className="add-food-button">+</button>
                </div>
                <div id="snacks-container">
                    <h4>Snacks</h4>
                    {this.state.snacks.map((row, index) => generateLogEntry(index, "snacks", row.food, row.calories))}
                    <button onClick={() => this.addRow("snacks")} className="add-food-button">+</button>
                </div>
                <div>
                    <button onClick={() => this.saveLog()}>Save Log</button>
                </div>
            </div>
        )
    }
}

export default FoodLog;