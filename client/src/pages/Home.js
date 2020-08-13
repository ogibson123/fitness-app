import React from "react";
import Navbar from "../components/Navbar.js";
import FoodLog from "../components/FoodLog.js";
import Footer from "../components/Footer.js";
import LogStyle from "../styles/LogStyle.js";

const Home = () => {
    return (
        <div className="App">
            <Navbar page="home" />
            <h3>{new Date().toDateString()}</h3>
            <LogStyle>
                <FoodLog />
            </LogStyle>
            <Footer />
        </div>
    );
}

export default Home;