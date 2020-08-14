import React from "react";
import Profile from "../components/Profile.js";
import Navbar from "../components/Navbar.js";
import ProfileStyle from "../styles/ProfileStyle.js";
import Footer from "../components/Footer.js";
import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";

const ProfilePage = () => {
    const {user} = useParams();
    return (
        <div>
            <ProfileStyle>
                <Navbar page="profile" />
                <Profile username={user} />
            </ProfileStyle>
            <CommentSection username={user}/>
            <Footer />
        </div>
    );
}

export default ProfilePage;