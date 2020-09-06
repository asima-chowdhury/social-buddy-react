import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import postImage from '../../images/postImage.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        paddingBottom: "20px",
        margin: "40px auto",
        boxShadow: "5px 5px 15px 10px lightgray"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: pink[500],
    },
    cardInfo: {
        height: '200px',
    },
    commentHeadLine: {
        paddingLeft: '20px',
    },
    spanHighlight: {
        color: "#e91e63"
    }
}));

const PostDetail = () => {
    const { id } = useParams();
    const [postDetail, setPostDetail] = useState({});

    const classes = useStyles();

    useEffect(() => {
        const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(postUrl)
            .then(response => response.json())
            .then(data => setPostDetail(data))
    }, [])

    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={
                    <Avatar aria-label="post" className={classes.avatar}>
                        SB 
                </Avatar>
                }
                title="Social Buddy"
                subheader="September 5, 2020"
            />
            <CardMedia
                className={classes.media}
                image={postImage}
                title="post image"
            />
            <CardContent className={classes.cardInfo}>
                <Typography gutterBottom variant="h5" component="h3">
                    <span className={classes.spanHighlight}>Post Title:</span> {postDetail.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span className={classes.spanHighlight}><b>Post Body:</b></span> {postDetail.body}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites" color="secondary">
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
            <Typography gutterBottom variant="h6" component="h6" className={classes.commentHeadLine}>
                <b> Comments of your post:</b>
            </Typography>
            <Comments postId={id}></Comments>
        </Card>
    );
};

export default PostDetail;