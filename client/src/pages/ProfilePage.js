import React from "react";
import Profile from "../components/Profile.js";
import Navbar from "../components/Navbar.js";
import ProfileStyle from "../styles/ProfileStyle.js";
import Footer from "../components/Footer.js";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const {user} = useParams();
    return (
        <div>
            <ProfileStyle>
                <Navbar />
                <Profile username={user} />
            </ProfileStyle>
            <Footer />
        </div>
    );
}

export default ProfilePage;