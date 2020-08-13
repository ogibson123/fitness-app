import React from "react";
import { Link } from "react-router-dom";
import NavStyle from "../styles/NavStyle.js";

const Navbar = (props) => {
    const logOut = () => {
        localStorage.removeItem("token");
    }
    
    const isLoggedIn = true;

    return (
        <NavStyle>
            <nav id="navbar">
                <Link className={`navitem ${props.page==="home"?" currPage":""} ${props.disableNavButtons?"disabled":""}`} to={"/home"}>Home</Link>
                <Link className={`navitem ${props.page==="history"?" currPage":""} ${props.disableNavButtons?"disabled":""}`} to={"/history"}>History</Link>
                <Link className={`navitem ${props.page==="profile"?" currPage":""} ${props.disableNavButtons?"disabled":""}`} to={`/profile/${localStorage.getItem("user")}`}>Profile</Link>
                <Link onClick={logOut} className={`navitem ${props.disableNavButtons?"hidden" : ""}`} to={"/login"}>Logout</Link>
            </nav>
        </NavStyle>
    );
}

export default Navbar;