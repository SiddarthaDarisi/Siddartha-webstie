
import HomePage from './HomePage.js';
import Box from '@mui/material/Box';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Resume from './Resume.js';
import Contact from './Contact.js';
import Project1 from './project1.js';
import Project2 from './Project2.js';
import Project3 from './Project3.js';
import Project4 from './Project4.js';
import ErrorPage from './ErrorPage.js';
// import Blog from './Blog.js';
function App() {

    return (
        <Box sx={{ backgroundColor: "#F5F5F7" }} >
            <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/post1" element={<Project1/>} />
                <Route path="/post2" element={<Project2 />} />
                <Route path="/post3" element={<Project3/>} />
                <Route path="/post4" element={<Project4/>} />
                {/* <Route path="/Blog" element={<Blog/>} /> */}
            </Routes>
        </Box>
    );
}

export default App;