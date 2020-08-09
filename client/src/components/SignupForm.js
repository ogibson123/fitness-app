import React from "react";
import { Redirect } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { Label } from "../styles/AuthStyle.js";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            username: "",
            password1: "",
            password2: "",
            alertMessage: "",
            redirect: null
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSignup(event) {
        event.preventDefault();

        if (this.state.password1 !== this.state.password2) {
            this.setState({ alertMessage: "Passwords do not match." })
            return;
        }

        let res = await fetch(process.env.REACT_APP_API + "/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password1, firstName: this.state.firstName })
        });
        
        if (res.status === 200){
            let json = await res.json();
            localStorage.setItem("token", json.token);
            this.setState({ redirect: "/history" });
        }
        else {
            this.setState({ alertMessage: "Username is taken." });
        }
    }

    render () {
        if (this.state.redirect)
            return <Redirect to={this.state.redirect} />
        return (
            <div style={{textAlign: "center"}}>
                <h1>Sign up</h1>
                <form onSubmit={(e) => this.handleSignup(e)}>
                    <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <input onChange={(e) => this.handleChange(e)} name="firstName" />
                    </div>
                    <div>
                        <Label htmlFor="username">Username</Label>
                        <input onChange={(e) => this.handleChange(e)} name="username" />
                    </div>
                    <div>
                        <Label htmlFor="password1">Password</Label>
                        <input onChange={(e) => this.handleChange(e)} name="password1" type="password" />
                    </div>
                    <div>
                        <Label htmlFor="password2">Confirm Password</Label>
                        <input onChange={(e) => this.handleChange(e)} name="password2" type="password" />
                    </div>
                    <div>
                        <button style={{margin: "10px"}} disabled={!this.state.firstName || !this.state.username || !this.state.password1 || !this.state.password2}>Signup</button>
                        <Link style={{margin: "5px"}}to="/signup">Already have an account? Log in</Link>
                    </div>
                </form>
                <Alert style={{display: "inline-block"}} variant="danger" show={this.state.alertMessage}>{this.state.alertMessage}</Alert>

            </div>
        );
    }
}

export default SignupForm;