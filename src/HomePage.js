

import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Container,
    Grid,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import WordsPrinter from "./wordPrinter";
import { useNavigate } from 'react-router-dom';



function HomePage() {

    // Inside your functional component
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Navigate to /resume
        navigate('/Resume');
    };

    const words = ['a Security Analyst', 'a Full Stack Developer', 'tech-savvy', 'always learning', 'a problem solver', 'Critical thinker', 'Creative', 'adaptable', 'an M.S. Graduate in Cybersecurity and Privacy'];

    return (

        <Box >
            <AppBar position="static" style={{ background: 'black', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        Siddartha Darisi
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button onClick={handleButtonClick} variant="h2" component="div" sx={{ flexGrow: 0, mr: 2, textTransform: 'initial' }}>
                        Resume
                    </Button>
                    <Button variant="h2" component="div" sx={{ flexGrow: 0, textTransform: 'initial' }}>
                        Contact
                    </Button>
                </Toolbar>

            </AppBar>

            <Container >
                <Typography variant="h5" sx={{ mt: 2, color: "#4D4D4D" }}>
                    Hello,  I am
                </Typography>

                <WordsPrinter words={words} />


                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Card>

                            <CardContent>
                                <Typography variant="h4">About Me</Typography>
                                <IconButton color="inherit" href="https://www.linkedin.com/in/siddartha-darisi" target="_blank" rel="noopener noreferrer">
                                    <LinkedIn />
                                </IconButton>
                                <IconButton color="inherit" href="https://github.com/SiddarthaDarisi" target="_blank" rel="noopener noreferrer">
                                    <GitHub />
                                </IconButton>
                                <Typography>
                                    I am a cybersecurity graduate with expertise in network security, threat analysis, and penetration testing.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4">Education</Typography>
                                <Typography>
                                    B.S. in Cybersecurity, XYZ University, 2021
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4">Experience</Typography>
                                <Typography>
                                    Cybersecurity Intern, ABC Company, 2020-2021
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <footer>
                <AppBar position="static" style={{ background: 'black', boxShadow: 'none', position: 'fixed', bottom: 0, left: 0, width: '100%',height:'12vh'}}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <IconButton color="inherit" href="https://www.linkedin.com/in/siddartha-darisi" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                            </IconButton>
                            <IconButton color="inherit" href="https://github.com/SiddarthaDarisi" target="_blank" rel="noopener noreferrer">
                                <GitHub />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>

            </footer>
        </Box >
    );
}

export default HomePage;
