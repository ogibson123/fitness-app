import styled from "styled-components";

const ProfileStyle = styled.div`
    h2 {
        text-align: center;
        margin-top: 20px;
    }

    .bio {
        text-align: center;
    }

    #profile-content {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #img {
        height: 70px;
        width: 70px;
        text-align: center;
    }

    #user-stats {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 50% 50%;
        border: 1px solid black;
        padding: 20px;
    }

    #popup {
        background-color: blue;
    }

`;

export default ProfileStyle;