
import HomePage from './HomePage.js';
import Box from '@mui/material/Box';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Resume from './resume.js';


function App() {

    return (
        <Box sx={{ backgroundColor: "#F5F5F7", height: '100vh' }} >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />

            </Routes>
        </Box>
    );
}

export default App;