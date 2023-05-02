import { SupervisedUserCircleRounded } from "@mui/icons-material";
import { Typography, Box, Card, Button } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function About() {
  return (
    <Card
      sx={{
        backgroundColor: "white",
        color: "black",
        maxWidth: "340px",
        fontWeight: "700px",
        borderRadius: "18px",
        p: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>About Feedback UI</Typography>
      <Typography>
        React Router is a standard library system built on top of the React and
        used to create routing in the React application using React Router
        Package. It provides ...
      </Typography>
      <Typography sx={{ m: 2, color: "#ff6a95" }}>Version:1.0.0</Typography>

      <Button
        variant='contained'
        startIcon={<ArrowForwardIcon />}
        sx={{ bgcolor: "#ff6a95", color: "white" }}
      >
        More
      </Button>
    </Card>
  );
}

export default About;
