import styled from "styled-components";
    
const NavStyle = styled.nav`
    #navbar {
        background-color: blue;
        width: 100vw;
        display: flex;
        align-items: center;
    }

    .navitem {
        color: white;
        text-decoration: none;
    }

    .navitem:hover {
        color: white;
        text-decoration: none;
        background-color: black;
    }

    .disabled {
        pointer-events: none;
        opacity: 60%;
    }

    .hidden {
        display: none;
    }

    p {
        color: white;
        padding: 0;
        margin: 0;    
    }
`;

export default NavStyle;