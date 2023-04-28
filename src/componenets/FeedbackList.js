import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <Typography>No Feedback yet</Typography>;
  }
  return (
    <Box sx={{}}>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </Box>
  );
};

export default FeedbackList;
