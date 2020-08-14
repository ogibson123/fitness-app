import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const CommentSection = (props) => {
    const [commentBody, setCommentBody] = useState("");
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API + "/comments/" + props.username, {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => res.json()).then(json => setCommentList(json.body));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let newComment = { content: commentBody, writtenFor: props.username, date: new Date().toDateString() };
        fetch(process.env.REACT_APP_API + "/comments", {
            method: "POST",
            headers: {
                Authorization: localStorage.getItem("token"),
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        }).then(res => res.json()).then(data => console.log(data));
        setCommentBody("");
        setCommentList([...commentList, newComment]);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input value={commentBody} onChange={(e) => setCommentBody(e.target.value)}></input>
                <button type="submit" disabled={!commentBody.length}>Submit</button>
            </form>
            {commentList.map((comment) =>
                <Comment author={comment.author} date={comment.date} content={comment.content} />
            )}
        </div>
    )
}

export default CommentSection;