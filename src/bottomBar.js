import React from 'react';
import { AppBar, Toolbar, Box, IconButton,  } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

const BottomBar = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <AppBar
        position="static"
        style={{
          background: 'black',
          boxShadow: 'none',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '12vh',
        }}
      > 
       {/* <Typography
      variant="body2"
      color="inherit"
    style={{justifyContent : 'center'}}
    >
      &copy; {new Date().getFullYear()}  All rights reserved.
    </Typography>
         */}
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/siddartha-darisi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/siddarthadarisi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
          
          </Box>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BottomBar;
