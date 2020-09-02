import React, { useState, useEffect } from "react";
import DefaultAvatar from "../assets/DefaultAvatar.png";
import styled from "styled-components";

const heights = ["4'8", "4'9", "4'10'", "4'11",
    "5'0", "5'1", "5'2",
    "5'3", "5'4", "5'5",
    "5'6", "5'7", "5'8",
    "5'9", "5'10", "5'11",
    "6'0", "6'1", "6'2",
    "6'3", "6'4", "6'5",
    "6'6", "6'7", "6'8", "6'9"];

const EditProfileStyle = styled.div`
        #fields {
            display: flex;
            justify-content: center;
        }

        #non-bio {
            display: flex;
            flex-direction: column;
            margin-left: 40px;
        }

        #pfp-bio {
            margin-right: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        h2 {
            text-align: center;
        }

        img {
            width: 70px;
            height: 70px;
        }

        .flex-edit {
            display: flex;
            flex-direction: column;
        }

        #height-display {
            text-align: center;
        }

    `;


const EditProfileForm = (props) => {
    const [profileInfo, setProfileInfo] = useState({ bio: props.bio, height: heights.indexOf(props.height), currWeight: props.currWeight, goalWeight: props.goalWeight, favFood: props.favFood });
    const [profilePicture, setProfilePicture] = useState(null);
    const [avatarURL, setAvatarURL] = useState(props.avatarURL);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
        if (profilePicture) 
            data.append("picture", profilePicture);

        data.append("height", heights[profileInfo.height]);
        for (let key in profileInfo)
            data.append(key, profileInfo[key]);

        let res = await fetch(process.env.REACT_APP_API + "/profile", {
            method: "PUT",
            headers: {
                Authorization: localStorage.getItem("token"),
            },
            body: data
        });
        console.log(res);
    }

    const changeAvatar = (e) => {
        setProfilePicture(e.target.files[0]);
        setAvatarURL(URL.createObjectURL(e.target.files[0]));
    }

    const avatarPreview = avatarURL ? avatarURL : DefaultAvatar;

    return (
        <EditProfileStyle>
            <h2>Editing Profile</h2>
            <form id="fields">
                <div id="pfp-bio">
                    <div className="flex-edit">
                        <p>Change Profile Picture</p>
                        <img src={avatarPreview} style={{ border: "1px solid black" }}></img>
                        <input onChange={e => changeAvatar(e)} type="file" accept="image/*" />
                    </div>
                    <div className="flex-edit">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" value={profileInfo.bio} onChange={e => setProfileInfo({ ...profileInfo, bio: e.target.value })} />
                    </div>
                </div>
                <div id="non-bio">
                    <label htmlFor="height">Height</label>
                    <input value={profileInfo.height} type="range" name="height" min="0" max="25" onChange={e => setProfileInfo({ ...profileInfo, height: e.target.value })} />
                    <p id="height-display">{heights[profileInfo.height] + '"'}</p>
                    <label htmlFor="current-weight">Current Weight (lbs)</label>
                    <input value={profileInfo.currWeight} type="number" name="current-weight" onChange={e => setProfileInfo({ ...profileInfo, currWeight: e.target.value })} />
                    <label htmlFor="goal-weight">Goal Weight (lbs)</label>
                    <input value={profileInfo.goalWeight} type="number" name="goal-weight" onChange={e => setProfileInfo({ ...profileInfo, goalWeight: e.target.value })} />
                    <label htmlFor="favorite-food">Favorite Food</label>
                    <input value={profileInfo.favFood} name="favorite-food" onChange={e => setProfileInfo({ ...profileInfo, favFood: e.target.value })} />
                    <button onClick={e => handleSubmit(e)}>Save</button>
                </div>
            </form>
        </EditProfileStyle>
    );
}

export default EditProfileForm;