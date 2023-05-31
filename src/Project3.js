import React from 'react';
import { Box, Typography, Avatar,  IconButton, Container, TextField, Button } from '@mui/material';
import { ArrowBack, CalendarToday } from '@mui/icons-material';
import BottomBar from './bottomBar';
import TopBar from './topBar';
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import awsamplifypic from './images/Picture1.jpg';
import Drowsiness_detection_ai from './Drowsiness_detection_ai.pdf';
const Project3 = () => {
    const navigate = useNavigate();
    const postId = "1205";
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
    const handleDownload = () => {
      
        const link = document.createElement('a');
        link.href = Drowsiness_detection_ai;
        link.download = 'Drowsiness_detection_ai.pdf';
        link.click();
      };

    return (
        <div>
            <TopBar />
            <Container maxWidth="md">
                <IconButton onClick={handleBack} sx={{ mb: 2,mt:1 }}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h4" gutterBottom>
                Machine Learning AI: Building an Effective Drowsiness Detection
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <IconButton sx={{ marginRight: 1 }}>
                        <CalendarToday />
                    </IconButton>
                    <Typography variant="body2">Published on May 31, 2023</Typography>
                </Box>
                <img src={awsamplifypic} alt="AWS Amplify" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
        <br/>

                <Typography variant="body1" sx={{ mb: 2 }}>
                The proposed drowsiness detection strategy introduces an efficient and reliable improvement over traditional methods, such as Adaboost, which train eye classifiers to detect eye state directly. Our strategy is composed of three main steps and utilizes two categories of classifiers, one for the face and one for the eyes. Initially, we employ classifiers to detect both the front and deflected faces, ensuring efficient face detection. Next, we determine the candidate region for the eyes based on the geometric distribution of facial features. Finally, we utilize trained classifiers to accurately detect the state of the eyes within this candidate region. This three-tier approach, although it necessitates both face and eye detection, has demonstrated an impressive average processing speed of 20 frames per second, offering excellent real-time performance. <br/><br/>

In comparison with our method, the traditional method can sometimes prove more time-consuming. Despite its single-step detection of eyes, it often requires more time due to the need for the eye classifier to search within the entire frame, rather than within a small candidate region. This situation is especially the case when faced with a deflected face, where the traditional method can take over twice the time to detect the face and eye state. <br/><br/>

The block diagram of our system showcases the connections made in the execution of the project. The system takes its input from a camera and an algorithm is developed to detect and track the face and eyes. Subsequently, calculations are performed to determine whether the driver is drowsy. If the driver's state is assessed as drowsy, the warning system issues an alarm. This consideration of drowsiness detection is crucial given the increasing number of road accidents attributed to driver fatigue. Our system aims to reduce such accidents by monitoring parameters such as eye detection, blinking, eyelid closure, and yawning, which are indicators of drowsiness. <br/><br/>
                 
Check out the report <span onClick={handleDownload} style={{ textDecoration: 'underline', cursor: 'pointer' }}>here</span>.

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

export default Project3;
