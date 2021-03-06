import styled from "styled-components";

const HistoryStyle = styled.div`
    #tables {
        display: grid;
        grid-template-columns: 0.5fr 0.5fr;
        grid-template-rows: 0.5fr 0.5fr;
        grid-gap: 30px;
        background-color: #d4fbff;
        border: 1px solid black;
        padding: 10px;

    }

    #outer {
        display: flex;
        justify-content: center;
    }

    #outer > * {
        margin-right: 50px;
    }

    #stats {
        padding: 10px;
        height: 90%;
        width: 20%;
        border: 1px solid black;
        background-color: #d4fbff;

    }

    #stats-header {
        padding-bottom: 10px;
        border-bottom: 1px dotted black;
    }

`;

export default HistoryStyle;