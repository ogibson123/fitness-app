import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EditProfileForm from "./EditProfileForm";


const Profile = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [profileData, setProfileData] = useState({});

    useEffect(async () => {
        if (!modalIsOpen) {
            let res = await fetch(process.env.REACT_APP_API + "/user/" + props.username, {
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            let data = await res.json();
            setProfileData(data);
            console.log(data);
        }
    }, [modalIsOpen]);

    return (
        <div>
            <Modal style={{content: {padding: 0}}} isOpen={modalIsOpen}>
                <div style={{backgroundColor: "blue"}}id="modal-head">
                    <button onClick={() => setModalIsOpen(false)}>X</button>
                </div>
                <EditProfileForm />
            </Modal>
            <h2>{props.username}</h2>
            <div id="profile-content">
                <div id="img"></div>
                <div id="bio-container">
                    <p className="bio">Date Registered: mm/dd/yyyy</p>
                    <p className="bio">placeholder.</p>
                    <button onClick={() => setModalIsOpen(true)}>Edit Profile</button>
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

export default Profile;