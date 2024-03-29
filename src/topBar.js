import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Siddartha_Darisi_Resume from './Siddartha_Darisi_CV.pdf';

const TopBar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Download the resume file
        const link = document.createElement('a');
        link.href = Siddartha_Darisi_Resume;
        link.download = 'siddarthadarisi_resume.pdf';
        link.click();
    };

    const handleButtonClick2 = () => {
        // Navigate to /contact
        navigate('/contact');
    };

    const handleButtonClick3 = () => {
        // Navigate to /
        navigate('/');
    };
    // const handleButtonClick4 = () => {
    //     // Navigate to /
    //     navigate('/Blog');
    // };

    return (
     
        <AppBar position="static" style={{ background: 'black', boxShadow: 'none' }}>
            <Toolbar>
                <Typography onClick={handleButtonClick3} variant="h6" component="div" sx={{ flexGrow: 0 }}>
                    Siddartha Darisi
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                {/* <Button
                    onClick={handleButtonClick4}
                    variant="h2"
                    component="div"
                    sx={{ flexGrow: 0,mr:1, textTransform: 'initial' }}
                >
                    Blog
                </Button> */}
                <Button
                    onClick={handleButtonClick}
                    variant="h2"
                    component="div"
                    sx={{ flexGrow: 0,mr:1, textTransform: 'initial' }}
                >
                    Resume
                </Button>
                <Button
                    onClick={handleButtonClick2}
                    variant="h2"
                    component="div"
                    sx={{ flexGrow: 0, textTransform: 'initial' }}
                >
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
