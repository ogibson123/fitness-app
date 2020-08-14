import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CommentStyle = styled.div`
    #outer {
        display: inline-block;
        border: 1px solid black;
        min-width: 250px;
        max-width: 250px;
        overflow-wrap: break-word;
    }

    #outer:hover {
        background-color: #d4fbff;
    }

    #date {
        opacity: 50%;
    }

    #heading {
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }

    #content {
        padding: 5px;
    }

`;

const Comment = (props) => {

    return (
        <CommentStyle>
            <div id="outer">
                <div id="heading">
                    <Link to={`/profile/${props.author}`}>{props.author}</Link>
                    <p id="date">{props.date}</p>
                </div>
                <p id="content">{props.content}</p>
            </div>
        </CommentStyle>
    );
}

export default Comment;