import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./componenets/Header";
import FeedbackItem from "./componenets/FeedbackItem";
import { Box } from "@mui/system";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./componenets/FeedbackList";
import FeedbackStat from "./componenets/FeedbackStat";
import FeedbackForm from "./componenets/FeedbackForm";
const App = () => {
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
    <Box className='container' sx={{ color: "white" }}>
      <Header />
      <div>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        {/* <FeedbackItem /> */}
      </div>
    </Box>
  );
};
export default App;
