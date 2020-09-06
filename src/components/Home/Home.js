import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    welcome: {
        textAlign: 'center',
        margin: '60px 0'
    },
    footer:{
        textAlign: 'center',
        padding: '20px 0',
        color:'#fff',
        backgroundColor: "#e91e63",
    },
    spanHighlight:{
        color: "#e91e63",
    }
}));

const Home = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            // .then(data =>console.log(data))
            .then(data => setPosts(data))
    }, [])

    return (
        <Container>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Social Buddy!
                        </Typography>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.welcome}>
                <h1>Welcome to <span className={classes.spanHighlight}>Social Buddy!</span><br />Here you can see {posts.length} posts!</h1>
            </div>
            <Grid container direction="row" justify="space-around">
                {
                    posts.map(post => <Post post={post} key={post.id}></Post>)
                }

            </Grid>
            <div className={classes.footer}>
                <h5>AllRights Reserved &copy; 2020 || Social Buddy || Designed By Asima</h5>
            </div>
        </Container>
    );
};

export default Home;