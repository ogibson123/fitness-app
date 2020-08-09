import styled from "styled-components";

const FoodLog = styled.div`
    .add-food-button {
        display: block;
        border: none;
        background: none;
        background-color: #b8ffff;
        color: black;
    }

    .add-food-button:hover {
        background-color: #00fafa;
    }

    .remove-row-button {
        border: none;
        background-color: white;
    }

    .remove-row-button:hover {
        font-size: 110%;
    }
`;

export default FoodLog;