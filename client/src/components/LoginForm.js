import React from "react";
import { Redirect } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { Label } from "../styles/AuthStyle.js";

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isLoading: false,
            alertVisible: false,
            redirect: null,
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleLogin(event) {
        event.preventDefault();
        
        let res = await fetch(process.env.REACT_APP_API + "/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        });
        
        if (res.status === 200){
            let json = await res.json();
            localStorage.setItem("token", json.token);
            this.setState({ redirect: "/history" });
        }
        else {
            this.setState({ alertVisible: true });
        }
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={this.state.redirect} />
            
        return (
            <div style={{textAlign: "center"}}>
                <h1>Login</h1>
                <form onSubmit={(e) => this.handleLogin(e)}>
                    <div>
                        <Label htmlFor="username">Username</Label>
                        <input onChange={(e) => this.handleChange(e)} name="username" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
                    </div>
                    <button disabled={!this.state.username || !this.state.password}>Login</button>
                </form>
                <Alert style={{display: "inline-block"}} variant="danger" show={this.state.alertVisible}>Incorrect username or password.</Alert>

            </div>
        )
    }
}

export default LoginForm;