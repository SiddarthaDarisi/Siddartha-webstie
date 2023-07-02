import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import TopBar from './topBar';
import BottomBar from './bottomBar';
import { useNavigate } from 'react-router';
const posts = [
  {
    id: 1,
    title: 'Computer security audit paper on SolarisWind Incident',
    content: "This computer security audit paper examines the SolarisWind incident, which occurred in the context of a major cybersecurity breach targeting a fictional company called SolarisWind. The purpose of this paper is to analyze the incident, identify the root causes, and propose recommendations to prevent similar incidents in the future.. ",
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lobortis magna et turpis facilisis.',
  },
  // Add more posts as needed
];

const Blog = () => {
    const navigate = useNavigate();

  const handlePostClick = (postId) => {
     // Handle post click event
    navigate(`/post${postId}`);
  };

  return (

    <div>
      <TopBar />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12}>
              <div
                onClick={() => handlePostClick(post.id)}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <Paper elevation={3} sx={{ padding: 3 }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body1">{post.content}</Typography>
                </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <BottomBar />
    </div>
  );
};

export default Blog;
