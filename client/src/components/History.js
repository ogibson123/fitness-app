import React from "react";
import Navbar from "./Navbar.js";

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Navbar page="history" />
                <div>History</div>
            </div>
        )
    }
}

export default History;