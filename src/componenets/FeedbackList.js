import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <Typography>No Feedback yet</Typography>;
  }
  return (
    <Box sx={{ display: "flex" }}>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default FeedbackList;
