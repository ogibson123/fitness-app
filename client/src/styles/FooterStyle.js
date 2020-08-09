import styled from "styled-components";

const FooterStyle = styled.div`
    #outer-container {
        bottom: 0;
        position: absolute;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 2px solid #007ca1;
        background-color: #009dcc;
        height: 80px;
    }

    .link-row {
        display: flex;
        text-align: center;
    }

    .item-container {
        margin-right: 25px;
    }

    p:hover {
        text-decoration: underline;
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