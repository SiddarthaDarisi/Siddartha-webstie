import React from 'react';
import { Box, Typography, Avatar, IconButton, Container, TextField, Button } from '@mui/material';
import { ArrowBack, CalendarToday } from '@mui/icons-material';
import BottomBar from './bottomBar';
import TopBar from './topBar';
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const Project1 = () => {
    const navigate = useNavigate();
    const postId = "1203";
    const handleBack = () => {
        navigate('/');
    };

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
                    Unveiling the Shadows: The SolarisWind Incident
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <IconButton sx={{ marginRight: 1 }}>
                        <CalendarToday />
                    </IconButton>
                    <Typography variant="body2">Published on May 23, 2023</Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                In today's digital world, the field of cybersecurity is an evolving battleground where both defensive and offensive technologies are continually being developed and updated. One such case that stands out in recent times is the Solaris Wind Attack. In this blog post, we will take a comprehensive look at this complex attack vector, and we'll discuss the auditing steps we took to understand its consequences better.<br /><br />
                    The Solaris Wind Attack is an intricate and aggressive form of cyber attack, primarily targeting entities within the energy sector. Named after the mythical figure Solaris, the personification of the sun and wind in certain cultures, this attack can swiftly penetrate networks and leave devastating effects in its wake.<br /><br />
                    The Solaris Wind Attack employs a multi-layered approach, utilizing a range of strategies such as spear phishing, social engineering, and advanced malware to gain unauthorized access to networks. Once inside, the attackers seek to compromise systems and potentially cripple vital infrastructure. This attack is particularly significant due to its sophistication and the potential for large-scale disruption.<br /><br />
                    We approached the auditing process for the Solaris Wind Attack in a systematic manner, with the primary objective being to understand the scale, methods, and potential consequences of the attack.<br /><br />
                    The process involved several steps:<br /><br />
                    <b>Data Gathering:</b><br />
                    We started by collecting all available data related to the attack. This included details about the compromised systems, patterns of behavior observed during the attack, and any evidence left behind by the attackers.<br /><br />
                    <b>Analysis:</b><br />
                    Next, we thoroughly analyzed the collected data. This step allowed us to identify key attack vectors and trace the sequence of events that led to the compromise of the systems. This helped us understand how the attack was carried out and identify potential weaknesses in the system that were exploited by the attackers.<br /><br />
                    <b>Simulation:</b><br />
                    To comprehend the true implications of the Solaris Wind Attack, we created a simulated environment mimicking the conditions of the actual attack. This allowed us to safely replicate the attack's steps, giving us a first-hand understanding of its mechanisms and consequences.<br /><br />
                    <b>Assessment:</b><br />
                    After analyzing the data and observing the simulation, we assessed the potential consequences of the Solaris Wind Attack. This covered both immediate effects on compromised systems and the long-term repercussions of such an attack.<br /><br />
                    Our audit revealed that the Solaris Wind Attack is capable of causing substantial damage. Immediate effects include unauthorized access to sensitive data, system outages, and potential disruptions to infrastructure. Long-term effects could include loss of customer trust, regulatory fines, and the cost of repairing and bolstering compromised systems.<br /><br />
                    In conclusion, the Solaris Wind Attack is a significant cybersecurity threat that exemplifies the increasing complexity and sophistication of modern-day attacks. The audit provided us with valuable insights into the intricacies of the attack, and highlighted the importance of strong security measures and constant vigilance to safeguard against such threats. In an increasingly interconnected world, it is crucial that we continue to learn from such incidents to protect our digital landscapes.
                </Typography>

                {/* Social sharing buttons */}
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
      
        <Box sx={{ marginBottom: 2, marginTop:2, padding: 2, }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>Discussion</Typography>
        {comments.map((comment, index) => (
            <Box key={index} sx={{ marginBottom: 2, padding: 2, borderRadius: 2,boxShadow: 1 , bgcolor: '#f5f5f5' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ marginRight: 2,  }} />
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

export default Project1;
