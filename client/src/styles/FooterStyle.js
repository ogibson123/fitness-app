import styled from "styled-components";

const FooterStyle = styled.div`
    #outer-container {
        bottom: 0;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 2px solid blue;
        background-color: blue;
        height: 80px;
        overflow-x: none;
    }

    .link-row {
        display: flex;
        text-align: center;
    }

    .item-container {
        margin-right: 25px;
    }

    .item-container:hover {
        font-size: 110%;
    }

    .icon {
        color: white;
    }

    p {
        display: inline-block;
        font-size: 80%;
        padding-left: 4px;
        color: white;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default FooterStyle;