import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Container,
  Snackbar,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { Alert } from '@mui/material';
import BottomBar from './bottomBar';
import TopBar from './topBar';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [optIn, setOptIn] = useState(false); // New state for opt-in checkbox

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!optIn) {
      setErrorMessage('Please check the opt-in checkbox to submit the form');
      setSnackbarOpen(true);
      return;
    }

    const formData = {
      name,
      email,
      message,
      optIn // Include opt-in value in the form datasa
    };

    try {
      const response = await fetch('https://arxvvt19v2.execute-api.us-east-1.amazonaws.com/default/siddarthadarisicontactpage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Form submitted successfully');
        setSnackbarOpen(true);
        resetForm();
      } else {
        throw new Error('Error occurred while submitting the form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setErrorMessage('Error occurred while submitting the form. Please try again');
      setSnackbarOpen(true);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setOptIn(false); // Reset opt-in value
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setErrorMessage(''); // Reset the error message when Snackbar is closed
  };

  return (
    <Box>
      <TopBar />
      <Container sx={{ mb: { xs: 15, sm: 15 }, mt: { xs: 10, sm: 8 } }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mt: 3 }}>
          <MailIcon /> Contact Me
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4} sx={{ mt: { xs: 0, md: 5 } }}>
  <Typography>
    I would love to chat! Whether you have an interesting project on your mind or just want to say hi, feel free to write me an email via the form, and I’ll get back to you ASAP. 
  </Typography>
  <Typography sx={{ mt: 2, color: 'Black', fontWeight: 'bold' }}>
    Looking to hire a dedicated and creative professional? Look no further. I'm always open to exciting new opportunities!
  </Typography>
</Grid>

          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 2 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  required
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  id="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel sx={{mt:{xs:2,md:0},mb:{xs:2,md:0}}}
                  control={
                    <Checkbox
                      checked={optIn}
                      onChange={(e) => setOptIn(e.target.checked)}
                      color="primary"
                      required // Added 'required' attribute to the Checkbox
                    />
                  }
                  label="I would like to receive further communication"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: 'black', display: 'block', margin: '0 auto' }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
          {errorMessage ? (
            <Alert onClose={handleSnackbarClose} severity="error">
              {errorMessage}
            </Alert>
          ) : (
            <Alert onClose={handleSnackbarClose} severity="success">
              {successMessage}
            </Alert>
          )}
        </Snackbar>
      </Container>
      <BottomBar />
    </Box>
  );
};

export default Contact;
