import React, { useState, useEffect } from "react";
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
        }

        h2 {
            text-align: center;
        }

        img {
            width: 70px;
            height: 70px;
        }

        #height-display {
            text-align: center;
        }

    `;


const EditProfileForm = () => {
    const [profileInfo, setProfileInfo] = useState({bio: "", height: 14, currWeight: 0, goalWeight: 0, favFood: ""});
    const [profilePicture, setProfilePicture] = useState(null);

    const saveData = async (e) => {
        e.preventDefault();

        let res = await fetch(process.env.REACT_APP_API + "/profile", {
            method: "PUT",
            headers: {
                Authorization: localStorage.getItem("token"),
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...profileInfo, height: heights[profileInfo.height]})
        });
    }

    return (
        <EditProfileStyle>
            <h2>Editing Profile</h2>
            <form id="fields">
                <div id="pfp-bio">
                    <p>Change Profile Picture</p>
                    <img src={profilePicture}></img>
                    <input onChange={e => setProfilePicture(URL.createObjectURL(e.target.files[0]))} type="file" accept="image/*" />
                    <textarea name="bio" onChange={e => setProfileInfo({...profileInfo, bio: e.target.value})}/>
                </div>
                <div id="non-bio">
                    <label for="height">Height</label>
                    <input value={profileInfo.height} type="range" name="height" min="0" max="25" onChange={e => setProfileInfo({...profileInfo, height: e.target.value})}/>
                    <p id="height-display">{heights[profileInfo.height]+'"'}</p>
                    <label for="current-weight">Current Weight (lbs)</label>
                    <input type="number" name="current-weight" onChange={e => setProfileInfo({...profileInfo, currWeight: e.target.value})}/>
                    <label for="goal-weight">Goal Weight (lbs)</label>
                    <input type="number" name="goal-weight" onChange={e => setProfileInfo({...profileInfo, goalWeight: e.target.value})}/>
                    <label for="favorite-food">Favorite Food</label>
                    <input name="favorite-food" onChange={e => setProfileInfo({...profileInfo, favFood: e.target.value})}/>
                    <button onClick={e => saveData(e)}>Save</button>
                </div>
            </form>
        </EditProfileStyle>
    );
}

export default EditProfileForm;