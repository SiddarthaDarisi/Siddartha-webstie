import React from "react";
import { Button } from "@mui/material";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card, Paper,
  CardContent,
} from "@mui/material";
import WordsPrinter from "./wordPrinter";
import mypic from "./images/mypic.jpg";
import project1pic from "./images/sensors.jpg";
import project2pic from "./images/project2.png";
import project3pic from "./images/project3.png";
import project4pic from "./images/project4.png";
import { useNavigate } from "react-router";
import TopBar from "./topBar.js";
import BottomBar from "./bottomBar.js";
import "./index.css";
import aws from "./images/aws.png";
import CEH from "./images/CEH.png";
import CompTIA from "./images/CompTIA.png";

const projects = [
  {
    title: "Computer security audit paper on SolarisWind Incident",
    description:
      "The SolarisWind incident had a devastating impact, causing a catastrophic failure of the wind farm located in a major metropolitan area. This resulted in widespread power outages, disrupting the local grid and affecting critical infrastructure, businesses, and individuals. The economic repercussions have been significant, with millions of dollars in damages and losses. In response to this event, I have written a comprehensive paper analyzing the incident, its implications, and proposing strategies to improve the resilience and security of renewable energy infrastructure.The SolarisWind incident serves as a stark reminder of the vulnerabilities and challenges associated with maintaining a reliable and robust renewable energy infrastructure.",
    image: project1pic,
    route: "/post1",
    buttonBgColor: "white",
    buttonTextColor: "black",
    titleColor: "white", // Add the titleColor property for custom color
    descriptionColor: "white", // Add the descriptionColor property for custom color
  },
  {
    title: "NewsApp - A Custom-Tailored, User-Centric News Feed Application",
    description:
    "The News App is a web application that leverages the News API to fetch the latest news articles from various sources. AWS Lambda functions handle the backend logic and API requests, allowing for scalable and cost-effective execution. With Amazon Cognito integration, users can securely sign up, log in, and access personalized features. User data and credentials are stored in Amazon DynamoDB, along with article data for efficient retrieval. This serverless architecture, powered by cutting-edge technologies such as the News API, AWS Lambda, Amazon Cognito, and Amazon DynamoDB, ensures a seamless and secure news browsing experience with real-time updates and personalized features.",
      image: project2pic,
    route: "/post2",
    buttonBgColor: "black",
    buttonTextColor: "white",
    titleColor: "black", // Add the titleColor property for custom color
    descriptionColor: "black", // Add the des
  },
  {
    title: "Machine Learning AI: Building an Effective Drowsiness Detection",
    description:
      "Our project focuses on developing an innovative drowsiness detection system designed to enhance road safety. Leveraging the power of machine learning and artificial intelligence, we have created a robust solution that utilizes computer vision techniques rather than drones. The system is intended to be implemented in vehicles, helping to detect signs of driver drowsiness and fatigue in real-time. By analyzing facial expressions, eye movements, and other relevant indicators, our AI model can accurately identify potential signs of drowsiness and promptly alert the driver. This technology has the potential to significantly reduce the risk of accidents caused by driver fatigue, ultimately saving lives and making our roads safer for everyone.",
    image: project3pic,
    route: "/post3",
    buttonBgColor: "black",
    buttonTextColor: "white",
    titleColor: "black", // Add the titleColor property for custom color
    descriptionColor: "black", // Add the des
  },
  {
    title: "Developing a Lightweight Version of the Apache Web Server",
    description:
    "Our project focused on the development of a compact and efficient version of the Apache Web Server, encompassing the implementation of both HTTP and FTP protocols. Throughout the development process, we gained valuable insights into the intricate workings of network communication and the complexities involved in handling client requests. One notable achievement was the successful design and execution of a comprehensive testing plan, allowing us to effectively handle various types of client requests, including arbitrary binary blobs. This hands-on experience provided us with a deep understanding of network protocols and further enhanced our expertise in building robust and reliable server-side applications.",   image: project4pic,
    route: "/post4",
    buttonBgColor: "white",
    buttonTextColor: "black",
    titleColor: "white", // Add the titleColor property for custom color
    descriptionColor: "white", // Add the des
  },
];

function HomePage() {
  const navigate = useNavigate();
  const words = [
    "Siddartha Darisi",
    "a Security Analyst",
    "AWS Certified Solutions Architect",
    "tech-savvy",
    "always learning",
    "CEH Certified",
    "a problem solver",
    "Critical thinker",
    "Creative",
    "CompTIA Security+ Certified",
    "adaptable",
    "an M.S. Graduate in Cybersecurity and Privacy",
  ];
  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <Box>
      <TopBar />
      <Container>
        <Typography
          variant="h4"
          sx={{
            mt: 2,
            color: "#4D4D4D",
            fontFamily: "Playfair Display",
            fontWeight: "700",
            marginTop: "6.8%",
            fontSize: "40",
          }}
        >
          Hello, I am
        </Typography>
        <WordsPrinter words={words} />
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sx={{ mb: 0 }}>
            <Card style={{ height: "auto" }}>
              <CardContent>
                <Grid container spacing={1} sx={{ mb: 1 }}>
                  <Grid
                    item
                    md={8}
                    xs={12}
                    sx={{
                      mt: 2,
                      marginLeft: "4%",
                      pointerEvents: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle"
                      sx={{
                        marginBottom: "6%",
                        fontSize: { xs: 15, sm: 15 },
                      }}
                    >
                      "Hello! I'm Siddartha Darisi, proudly holding a Master of Science in Cybersecurity & Privacy from the New Jersey Institute of Technology. With over three years of hands-on experience, I've forged my expertise as a Cyber Security Analyst, mastering tools from Splunk to OpenVAS. While I'm deeply invested in network security, threat mitigation, and cloud solutions, I'm equally passionate about life outside the digital realm. Whether I'm decrypting cyber threats or trekking a nature trail, I believe in embracing challenges and learning from every experience. When I'm not analyzing network protocols, you might find me chasing adventures from skydiving to hiking, always seeking the next exhilarating journey. Let's connect and navigate the intricate world of cybersecurity or share tales of our latest adventures!"
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={2} sx={{ height: "auto" }}>
                    <Box
                      component="img"
                      src={mypic}
                      sx={{
                        marginLeft: { xs: 6, sm: "none", md: "35%" },

                        pointerEvents: "none",
                        width: {
                          xs: "70%",
                          sm: "80%",
                          md: "120%",
                          lg: "110%",
                          xl: "90%",
                        },
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
          <Grid container spacing={4} sx={{ mt: 0 }}>
  <Grid item xs={12}>
   
    
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
      <Box
        mt={1}
        sx={{
          width: "30%",
          maxWidth: "170px",
          height: "auto",
          opacity: 0.8,
        }}
        component="img"
        src={CEH}
      />
      <Box
        mt={1}
        sx={{
          width: "30%",
          maxWidth: "170px",
          height: "auto",
          opacity: 0.9, // Reduce opacity by 10
          
        }}
        component="img"
        src={aws}
      />
      <Box
        mt={1}
        sx={{
          width: "30%",
          maxWidth: "170px",
          height: "auto",
          opacity: 0.9,
        }}
        component="img"
        src={CompTIA}
      />
    </Box>
    
  </Grid>
  </Grid>
  <Grid container spacing={4} sx={{ mt: 1 }}>
    
  <Grid item xs={12}>
    <Paper elevation={1} sx={{ backgroundColor: "White", borderRadius: "5px",  boxShadow: "0px -4px 4px -2px rgba(0, 0, 0, 0.2)" }}>
      <Typography
        variant="h4" component="h1" 
        sx={{
          padding: "0.5%",
          mt: 1,
          textAlign: "center",
          color: "Black",
        }}
      >
        Projects
      </Typography>
    </Paper>
  </Grid>
  
     {projects.map((project, index) => (
          
            <Grid item md={12} lg={ 6} key={index}>
              <Card
                onClick={() => handleClick(project.route)}
                sx={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "1px 1px 10px rgba(0, 0, 0, 1)", // Initial shadow
                  transition: "box-shadow 0.3s ease", // Smooth transition
                  "&:hover": {
                    boxShadow: "1px 1px 20px rgba(0, 0, 0, 1)", // Additional shadow on hover
                  },
                }}
              >
               <CardContent sx={{ pb: 0}}>  {/* Reduce or remove the bottom padding */}
  <Grid container spacing={2} sx={{ mt: 2 }}>
    <Container>
      <Box className="classname">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{ color: project.titleColor || "white" }}
          >
            {project.title}
          </Typography>
        </Grid>
      </Box>
      <Box className="text-box">
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              color: project.descriptionColor || "black",
            }}
          >
            {project.description}
          </Typography>
        </Grid>
      </Box>
    </Container>
    <Grid item xs={12} sx={{   marginBottom:5,display: "flex", justifyContent: "center" }}>
  
  <Button
    sx={{
      bgcolor: project.buttonBgColor || "black",
      color: project.buttonTextColor || "white",
      fontSize: {
        xs: "1rem",
        sm: "1.2rem",
        md: "1.2rem",
        lg: "1.2rem",
        xl: "1.2rem",
      },
      fontWeight: "medium",
      borderRadius: "0.5rem",
      width: {
        xs: "8rem",
        sm: "10rem",
        md: "10rem",
        lg: "10rem",
        xl: "10rem",
      },
      height: {
        xs: "2.5rem",
        sm: "3rem",
        md: "3rem",
        lg: "3rem",
        xl: "3rem",
      },
    }}
    onClick={() => handleClick(project.route)}
  >
    Explore
  </Button>


    </Grid>
  </Grid>
</CardContent>

              </Card>
            </Grid>
          ))}
         
        </Grid>

      </Container>
      <BottomBar />
    </Box>
  );
}
export default HomePage;
