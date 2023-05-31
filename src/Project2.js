import React from 'react';
import { Box, Typography, Avatar,  IconButton, Container, TextField, Button } from '@mui/material';
import { ArrowBack, CalendarToday } from '@mui/icons-material';
import BottomBar from './bottomBar';
import TopBar from './topBar';
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import awsamplifypic from './images/aws -amplify.png';
const Project2 = () => {
    const navigate = useNavigate();
    const postId = "1204";
    const handleBack = () => {
        navigate('/');
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [authorName, setAuthorName] = useState('');

    useEffect(() => {
        // Fetch existing comments from the API
        fetchComments();
    }, [postId]);

    const fetchComments = () => {
        fetch(`https://mz5gkyzx9k.execute-api.us-east-1.amazonaws.com/prod/comments?post_id=${postId}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setComments(data);
                } else {
                    console.error('Invalid data:', data);
                }
            })
            .catch(error => console.error(error));
    };

    const addComment = () => {
        if (newComment.trim() === '' || authorName.trim() === '') {
            return;
        }

        const timestamp = new Date().toISOString();
        const commentData = {
            comment: newComment.trim(),
            author: authorName.trim(),
            post_id: postId,
            timestamp: timestamp
        };

        fetch('https://mz5gkyzx9k.execute-api.us-east-1.amazonaws.com/prod/comments', {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                return response.json();
            })
            .then(() => {
                setNewComment('');
                setAuthorName('');
                fetchComments();
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <TopBar />
            <Container maxWidth="md">
                <IconButton onClick={handleBack} sx={{ mb: 2 }}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h4" gutterBottom>
                NewsApp - A Custom-Tailored, User-Centric News Feed Application
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <IconButton sx={{ marginRight: 1 }}>
                        <CalendarToday />
                    </IconButton>
                    <Typography variant="body2">Published on May 24, 2023</Typography>
                </Box>
                <img src={awsamplifypic} alt="AWS Amplify" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />


                <Typography variant="body1" sx={{ mb: 2 }}>
                    
NewsApp stands as a testimony to the blend of cutting-edge technology and meticulous design, enabling users to stay abreast of the latest happenings in their preferred news categories. The application, developed using the leading JavaScript library, React, and Material UI, delivers a visually appealing, intuitive, and seamless user experience, furthering user engagement and satisfaction.<br/><br/>

The application is backed by a robust infrastructure, leveraging Amazon DynamoDB as its primary database. DynamoDB's high performance and scalability guarantee a swift response to data queries, ensuring that users always get their news updates in real time. Further enhancing the application's performance, we employed GraphQL, a modern data query and manipulation language. GraphQL efficiently streamlines the data querying process by enabling specific data retrieval as per requirement, thus eliminating the excessive data transmitted in a traditional RESTful API architecture. This potent combination of DynamoDB and GraphQL offers an effective, data-efficient backend solution that is both performant and economical.<br/><br/>

In an era of serverless computing, NewsApp embraces AWS Lambda functions via AWS Amplify for handling backend processes. AWS Lambda offers the convenience of running the code without the hassle of managing servers, thereby improving the scalability and reducing the overhead costs. AWS Amplify, a set of tools and services that help front-end web and mobile developers build full-stack applications, works in synergy with AWS Lambda to provide a comprehensive serverless computing solution.<br/><br/>

One of the key features of NewsApp is its intelligent feed algorithm. The algorithm curates and presents general category news to users when they are not signed in. However, upon successful sign-in, the algorithm adapts and customizes the feed based on user preferences, thereby offering a personalized news reading experience. This dynamic adaptability of the app to cater to individual user preferences makes it stand apart from other news feed applications.<br/><br/>

Furthermore, NewsApp boasts a user-friendly sign-up and sign-in page that makes it easy for new users to join the platform and for existing users to access their customized feeds. An intuitive design, combined with efficient error handling, ensures a hassle-free sign-up and sign-in process.<br/><br/>

To further personalize the news-reading experience, NewsApp is equipped with a dedicated settings page where users can customize their news preferences by choosing from a plethora of categories. Whether users are interested in technology, politics, sports, entertainment, or any other subject, NewsApp is designed to cater to their specific news consumption preferences.<br/><br/>

Lastly, understanding the curiosity of users to explore specific topics of interest, NewsApp incorporates a built-in search functionality. This feature allows users to delve into particular subjects, providing them with a comprehensive set of news articles relevant to their search keywords.<br/><br/>

In conclusion, NewsApp is a dynamic, user-centric news feed application designed and developed using state-of-the-art technologies. It exemplifies a successful amalgamation of a visually appealing user interface, an efficient backend system, and smart features that adapt to user preferences, offering a personalized news-reading experience. <br/><br/>
                    
                 
    Check out NewsApp <a href="https://main.d2i9e25pjo5xpi.amplifyapp.com/" target="_blank" rel="noopener noreferrer">here</a>!

                </Typography>
               

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <FacebookShareButton url={window.location.href}>
                        <IconButton aria-label="Facebook" >
                            <Facebook />
                        </IconButton>
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href}>
                        <IconButton aria-label="Twitter">
                            <Twitter />
                        </IconButton>
                    </TwitterShareButton>
                    <LinkedinShareButton url={window.location.href}>
                        <IconButton aria-label="LinkedIn">
                            <LinkedIn />
                        </IconButton>
                    </LinkedinShareButton>
                </Box>

                {/* Comments section */}

                <Box sx={{ marginBottom: 2, marginTop: 2, padding: 2, }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>Discussion</Typography>
                    {comments.map((comment, index) => (
                        <Box key={index} sx={{ marginBottom: 2, padding: 2, borderRadius: 2, boxShadow: 1, bgcolor: '#f5f5f5' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ marginRight: 2, }} />
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{comment.author}</Typography>
                                    <Typography variant="caption" sx={{ fontSize: "0.7rem", color: 'text.secondary' }}>{new Date(comment.timestamp).toLocaleDateString()}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: 1 }}>
                                <Typography variant="body2">{comment.comment}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>


                {/* Comment input field */}

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, marginBottom: 2 }}>
                    <TextField
                        label="Your Name"
                        value={authorName}
                        onChange={event => setAuthorName(event.target.value)}
                        sx={{ width: '100%', marginBottom: 1 }}
                    />
                    <TextField
                        label="Share Your Thoughts"
                        multiline
                        rows={4}
                        value={newComment}
                        onChange={event => setNewComment(event.target.value)}
                        variant="outlined"
                        sx={{ width: '100%', marginBottom: 1 }}
                    />
                    <Button variant="contained" onClick={addComment} color='grey' sx={{ alignSelf: 'flex-end' }}>Post</Button>
                </Box>


            </Container>
            <BottomBar />
        </div>
    );
};

export default Project2;
