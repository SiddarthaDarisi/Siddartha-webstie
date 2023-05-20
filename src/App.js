import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Personal Website
          </Typography>

        </Toolbar>
      </AppBar>
      <Container>
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
    </Box>
  );
}

export default App;
