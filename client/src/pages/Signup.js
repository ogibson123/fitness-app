import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import SignupForm from "../components/SignupForm.js";
import Footer from "../components/Footer.js";

const Signup = () => {
    return (
        <div>
            <Navbar />
            <SignupForm />
            <Link to="/signup">Already have an account? Log in</Link>
            <Footer />
        </div>
    );
}

export default Signup;