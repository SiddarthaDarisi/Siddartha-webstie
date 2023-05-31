
import HomePage from './HomePage.js';
import Box from '@mui/material/Box';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Resume from './Resume.js';
import Contact from './Contact.js';
import Project1 from './project1.js';
import Project2 from './Project2.js';
import Project3 from './Project3.js';
function App() {

    return (
        <Box sx={{ backgroundColor: "#F5F5F7" }} >
            <Routes>
                <Route path="/project2" element={<Project2 />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project1" element={<Project1/>} />
                <Route path="/project3" element={<Project3/>} />
            </Routes>
        </Box>
    );
}

export default App;