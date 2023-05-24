import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Project1 = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Body:', body);
    // TODO: Add functionality for form submission
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Post
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          required
          fullWidth
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          label="Body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Project1;
