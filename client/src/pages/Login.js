import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import LoginForm from "../components/LoginForm.js";
import Footer from "../components/Footer.js";

const Login = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <Link to="/signup">Create an Account</Link>
            <Footer />
        </div>
    );
}

export default Login;