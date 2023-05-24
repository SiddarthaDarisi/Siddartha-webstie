
import HomePage from './HomePage.js';
import Box from '@mui/material/Box';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Resume from './Resume.js';
import Contact from './Contact.js';
import project1 from './project1.js';

function App() {

    return (
        <Box sx={{ backgroundColor: "#F5F5F7" }} >
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project1" element={<project1 />} />
            </Routes>
        </Box>
    );
}

export default App;