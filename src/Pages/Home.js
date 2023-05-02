import { Box } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "../componenets/FeedbackForm";
import FeedbackList from "../componenets/FeedbackList";
import FeedbackStat from "../componenets/FeedbackStat";
import FeedbackData from "../Data/FeedbackData";
function Home() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure ypu wnat to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStat feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      {/* <FeedbackItem /> */}
    </Box>
  );
}

export default Home;
