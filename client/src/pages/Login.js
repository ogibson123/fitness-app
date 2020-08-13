import React from "react";
import Navbar from "../components/Navbar.js";
import LoginForm from "../components/LoginForm.js";
import Footer from "../components/Footer.js";
import styled from "styled-components";

const Login = () => {
    return (
        <div>
            <Navbar disableNavButtons />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50vh"}}>
                <LoginForm />
            </div>
            <Footer stick />
        </div>
    );
}

export default Login;