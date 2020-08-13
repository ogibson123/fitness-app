import React from "react";
import { FaGithub, FaLinkedin, FaReact, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import FooterStyle from "../styles/FooterStyle.js";

const Footer = (props) => {

    return (
        <FooterStyle>
            <div id="outer-container" className={props.stick ? "stick" : ""}>
                <div className="link-row">
                    <span className="item-container">
                        <a href="http://github.com/ogibson123" target="_blank">
                            <FaGithub className="icon" />
                            <p>ogibson123</p>
                        </a>
                    </span>
                    <span className="item-container">
                        <a href="https://www.linkedin.com/in/oscar-gibson-b9b8011ab/" target="_blank">
                            <FaLinkedin className="icon" />
                            <p>Oscar Gibson</p>
                        </a>
                    </span>
                </div>
                <div className="link-row">
                    <span className="item-container">
                        <a href="https://reactjs.org/" target="_blank">
                            <FaReact className="icon" />
                            <p>React</p>
                        </a>
                    </span>
                    <span className="item-container">
                        <a href="https://flask.palletsprojects.com/" target="_blank">
                            <FaPython className="icon" />
                            <p>Flask</p>
                        </a>
                    </span>
                    <span className="item-container">
                        <a href="https://www.mongodb.com/" target="_blank">
                            <DiMongodb className="icon" />
                            <p style={{left: "20px"}}>MongoDB</p>
                        </a>
                    </span>
                </div>
            </div>
        </FooterStyle>
    );
}

export default Footer;