import React from "react";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            inEditMode: false,
        }
    }

    componentDidMount() {
        console.log(this.props.username);
    }

    render() {

        return (
            <div>
                <h2>{this.props.username}</h2>
                <div id="profile-content">
                    <div id="img"></div>
                    <div id="bio-container">
                        <p className="bio">Date Registered: mm/dd/yyyy</p>
                        <p className="bio">placeholder.</p>
                    </div>
                    <div id="user-stats">
                        <p>Height: </p>
                        <p>Current Weight: xxx lbs</p>
                        <p>Desired Weight: xxx lbs</p>
                        <p>Favorite Food: </p>
                        <p>Total Calories Tracked: ??</p>
                        <p>Calories Per Day: ????</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;