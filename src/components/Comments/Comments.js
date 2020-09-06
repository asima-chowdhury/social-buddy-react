import React, { useEffect, useState } from 'react';
import './Comments.css'
import { Container } from '@material-ui/core';
import CommentDetail from '../CommentDetail/CommentDetail';
import FriendImg from '../FriendImg/FriendImg';
import FriendPic from '../../fakeData/allFriend';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: '#e7e7e7',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 5px rgba(255, 105, 135, .3)',
        padding: '0 30px',
        display: 'flex'
    },
    commentPic: {
        width: '20%',
    },
    commentPart: {
        width: '80%',
    },
});

const Comments = (props) => {
    const classes = useStyles();

    const id = props.postId;
    const [commentDetail, setCommentDetail] = useState([]);

    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(commentUrl)
            .then(response => response.json())
            .then(data => setCommentDetail(data))
    }, [])
    return (
        <Container>
            <div className={classes.root}>
                <div className={classes.commentPic}>
                    {
                        FriendPic.map(singleImg => <FriendImg singleImg={singleImg} key={singleImg.id}></FriendImg>)
                    }
                </div>
                <div className={classes.commentPart}>
                    {
                        commentDetail.map(comment => <CommentDetail comments={comment} key={comment.id}></CommentDetail>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Comments;