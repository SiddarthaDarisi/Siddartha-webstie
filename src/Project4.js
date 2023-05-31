import React from 'react';
import { Box, Typography, Avatar,  IconButton, Container, TextField, Button } from '@mui/material';
import { ArrowBack, CalendarToday } from '@mui/icons-material';
import BottomBar from './bottomBar';
import TopBar from './topBar';
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const Project3 = () => {
    const navigate = useNavigate();
    const postId = "1206";
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
                <IconButton onClick={handleBack} sx={{ mb: 2,mt:1 }}>
                    <ArrowBack />
                </IconButton>
                <Typography variant="h4" gutterBottom>
                Exploring Higher Layer Protocols: Building an Apache Web Server Replica
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <IconButton sx={{ marginRight: 1 }}>
                        <CalendarToday />
                    </IconButton>
                    <Typography variant="body2">Published on May 31, 2023</Typography>
                </Box>
            
        <br/>

                <Typography variant="body1" sx={{ mb: 2 }}>
         

                Throughout my academic journey, I have been able to delve into numerous fascinating projects. One such endeavor was an in-depth exploration into higher layer protocols, such as HTTP and FTP. By constructing a miniature version of the Apache web server, I was able to gain valuable insights into network protocol intricacies and server operations. <br/>

Part one of the project saw Apache configured to listen on a user-specified port for HTTP requests from browsers. The mission was to extract the host name from the request, conduct a DNS lookup, and then return the full request back to the browser, coupled with the IP address of the host. This component of the project challenged me to comprehend and execute server-client interactions at a deeper level, enabling the server to function efficiently in receiving and processing requests. <br/><br/>

Part two of the project extended the Apache capabilities to cater for HTTP/1.1 requests from browsers, functioning as a mediator passing user requests to the actual target, and returning the data from the target. The Apache server had to correctly service each request, close the connection, and handle any errors gracefully by closing the connection, logging an 'ERROR', and then proceeding to the next request. This phase of the project honed my ability to deal with error handling and ensuring stability and resilience in the server's operation. <br/><br/>

A crucial part of this project was adhering to the rules and restrictions, including strict memory usage and open socket limits, as well as the parsing and handling of requests. Working within these parameters pushed me to write efficient and robust code, managing resources carefully to ensure the server’s optimal performance. <br/><br/>

This project has undoubtedly enhanced my understanding of network protocols and server operations. The intricacies of managing HTTP requests, the nuances of DNS lookups, and the handling of client-server communications have all contributed to my growing knowledge base. Moreover, overcoming challenges related to resource management and error handling has prepared me for future endeavours in network engineering and systems development. This project has been a significant stepping stone in my journey as a budding computer scientist, and I am eager to apply what I've learned in my future studies and career. <br/>
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
