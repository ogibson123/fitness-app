import styled from "styled-components";
    
const NavStyle = styled.nav`
    #navbar {
        background-color: #009dcc;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .navitem {
        color: white;
        text-decoration: none;
        margin-left: 20px;
        padding: 5px;
        border: 2px solid #009dcc;
    }

    .navitem:hover {
        color: white;
        border: 2px dotted white;
    }

    .currPage {
        border: 2px dotted white;
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