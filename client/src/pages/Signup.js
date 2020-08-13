import React from "react";
import Navbar from "../components/Navbar.js";
import SignupForm from "../components/SignupForm.js";
import Footer from "../components/Footer.js";

const Signup = () => {
    return (
        <div>
            <Navbar />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "60vh"}}>
                <SignupForm />
            </div>
            <Footer stick/>
        </div>
    );
}

export default Signup;