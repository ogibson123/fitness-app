import React from "react";
import Navbar from "../components/Navbar.js";
import FoodLog from "../components/FoodLog.js";
import Footer from "../components/Footer.js";
import LogStyle from "../styles/LogStyle.js";
import { Redirect } from "react-router-dom";

const Home = () => {

    return (
        <div className="App">
            <Navbar />
            <h2>{new Date().toDateString()}</h2>
            <LogStyle>
                <FoodLog />
            </LogStyle>
            <Footer />
        </div>
    );
}

export default Home;