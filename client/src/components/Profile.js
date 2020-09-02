import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EditProfileForm from "./EditProfileForm";
import DefaultAvatar from "../assets/DefaultAvatar.png";
import styled from "styled-components";

const CloseButton = styled.div`
    border: none;
    cursor: pointer;
    padding: 5px;
`;

const ModalHead = styled.div`
    background-color: #c7fbff;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px dashed black;
`;

const Profile = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        if (!modalIsOpen) {
            fetch(process.env.REACT_APP_API + "/user/" + props.username, {
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }).then(res => res.json().then(data => setProfileData(data)));
        }
    }, [modalIsOpen]);

    const modalStyle = {content: {padding: 0}, overlay: {width: "80%", maxWidth: "80%", left: "8%", backgroundColor: "rgba(0,0,0,0)"}};

    return (
        <div id="outer-all">
            <Modal style={modalStyle} isOpen={modalIsOpen}>
                <ModalHead>
                    <CloseButton onClick={() => setModalIsOpen(false)}>X</CloseButton>
                </ModalHead>
                <EditProfileForm {...profileData} />
            </Modal>
            <h2>{props.username}</h2>
            <div id="profile-content">
                <img src={profileData.avatarURL ? profileData.avatarURL : DefaultAvatar} id="img" />
                <div id="bio-container">
                    <p className="bio">Date Registered: mm/dd/yyyy</p>
                    <p className="bio">{profileData.bio}</p>
                    <button onClick={() => setModalIsOpen(true)}>Edit Profile</button>
                </div>
                <div id="user-stats">
                    <p>{`Height: ${profileData.height}`}</p>
                    <p>{`Current Weight: ${profileData.currWeight} lbs`}</p>
                    <p>{`Favorite Food: ${profileData.favFood}`}</p>
                    <p>{`Desired Weight: ${profileData.goalWeight} lbs`}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;