
import HomePage from './HomePage.js';
import Box from '@mui/material/Box';
import { Routes, Route } from "react-router-dom";
import React from 'react';
// 
function App() {
    return (
        <Box sx={{ backgroundColor: "#F5F5F7" }} >
            <Routes>
                <Route path="/" element={<HomePage />} />

            </Routes>
        </Box>
    );
}

export default App;