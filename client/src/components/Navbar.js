import React from "react";
import { Link } from "react-router-dom";
import NavStyle from "../styles/NavStyle.js";

const Navbar = () => {
    const logOut = () => {
        
    }
    const isLoggedIn = true;

    return (
        <NavStyle>
            <nav id="navbar">
                <Link className={"navitem"+(!isLoggedIn?" disabled":"")} to={"/home"}>Home</Link>
                <Link className={"navitem"+(!isLoggedIn?" disabled":"")} to={"/history"}>History</Link>
                <Link onClick={logOut} className={"navitem"+(!isLoggedIn?" hidden":"")} to={"/login"}>Logout</Link>
                <p className={(!isLoggedIn?" hidden":"")}>{"Welcome, "}</p>
            </nav>
        </NavStyle>
    );
}

export default Navbar;