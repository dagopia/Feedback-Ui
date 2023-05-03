import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <Typography>No Feedback yet</Typography>;
  }
  return (
    <Box sx={{}}>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default FeedbackList;
