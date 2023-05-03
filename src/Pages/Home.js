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
      <FeedbackStat />
      <FeedbackList />
      {/* <FeedbackItem /> */}
    </Box>
  );
}

export default Home;
