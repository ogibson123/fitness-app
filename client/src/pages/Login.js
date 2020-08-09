import React from "react";
import Navbar from "../components/Navbar.js";
import LoginForm from "../components/LoginForm.js";
import Footer from "../components/Footer.js";

const Login = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;