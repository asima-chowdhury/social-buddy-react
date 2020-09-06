import React from 'react';
import { Container } from '@material-ui/core';
import './CommentDetail.css'

const CommentDetail = (props) => {
    const { name, email, body } = props.comments;
    return (
        <Container>
            <div className="comment-content">
                <h4><span>Name: </span>{name}</h4>
                <h4><span>Email:</span> {email}</h4>
                <p><span>Message:</span> {body}</p>
            </div>
        </Container>
    );
};

export default CommentDetail;