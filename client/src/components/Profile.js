import React from "react";
import Modal from "react-modal";
import EditProfileForm from "./EditProfileForm";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            inEditMode: false,
            showModal: false
        }
    }

    componentDidMount() {
        console.log(this.props.username);
    }

    openModal() {
        this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    render() {

        return (
            <div>
                <Modal style={{content: {padding: 0}}} isOpen={this.state.showModal}>
                    <div style={{backgroundColor: "blue"}}id="modal-head">
                        <button onClick={() => this.closeModal()}>X</button>
                    </div>
                    <EditProfileForm />
                </Modal>
                <h2>{this.props.username}</h2>
                <div id="profile-content">
                    <div id="img"></div>
                    <div id="bio-container">
                        <p className="bio">Date Registered: mm/dd/yyyy</p>
                        <p className="bio">placeholder.</p>
                        <button onClick={() => this.openModal()}>Edit Profile</button>
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