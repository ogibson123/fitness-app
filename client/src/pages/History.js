import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.js";
import Calendar from "react-calendar";
import StaticLog from "../components/StaticLog.js";
import { formatDate } from "../helpers/dates";
import 'react-calendar/dist/Calendar.css';
import HistoryStyle from "../styles/HistoryStyle";

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            breakfast: [],
            lunch: [],
            dinner: [],
            snacks: []
        };
    }

    componentDidMount() {
        this.getLog(this.state.date);
    }

    onChange(date) {
        this.setState({ date: date });
        this.getLog(date);
    }

    async getLog(date) {
        let res = await fetch(process.env.REACT_APP_API + "/logs/" + formatDate(date), {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });

        if (res.status === 200) {
            let data = await res.json();
            this.setState({ breakfast: data.body.breakfast, lunch: data.body.lunch, dinner: data.body.dinner, snacks: data.body.snacks });
        }

        else if (res.status === 404) {
            this.setState({ breakfast: [], lunch: [], dinner: [], snacks: [] });
        }
    }

    //add up all sums from each category
    getTotalCalories() {
        return this.state.breakfast.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0)
            + this.state.lunch.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0)
            + this.state.dinner.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0)
            + this.state.snacks.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0);
    }

    render() {
        return (
            <div>
                <HistoryStyle>
                    <Navbar page="history" />
                    <h3 style={{textAlign: "center"}}>Food Log History</h3>
                    <div id="outer">
                        <Calendar onChange={date => this.onChange(date)} value={this.state.date} />
                        <div>
                            <h5 style={{textAlign: "center"}}>{this.state.date.toDateString()}</h5>
                            <div id="tables">
                                <StaticLog tableName="Breakfast" data={this.state.breakfast} />
                                <StaticLog tableName="Lunch" data={this.state.lunch} />
                                <StaticLog tableName="Dinner" data={this.state.dinner} />
                                <StaticLog tableName="Snacks" data={this.state.snacks} />
                            </div>
                        </div>
                        <div id="stats">
                            <p id="stats-header">Calorie Stats</p>
                            <p>{`Breakfast: ${this.state.breakfast.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0)} cal`}</p>
                            <p>{`Lunch: ${this.state.lunch.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0)} cal`}</p>
                            <p>{`Dinner: ${this.state.dinner.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0)} cal`}</p>
                            <p>{`Snacks: ${this.state.snacks.reduce((accumulator, elem) => parseInt(elem.calories) + accumulator, 0)} cal`}</p>
                            <hr />
                            <p><b>{`Total: ${this.getTotalCalories()} cal`}</b></p>
                        </div>
                    </div>
                </HistoryStyle>
                <Footer stick />
            </div>
        )
    }
}

export default History;