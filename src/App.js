import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./componenets/Header";
import FeedbackItem from "./componenets/FeedbackItem";
import { Box } from "@mui/system";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./componenets/FeedbackList";
import FeedbackStat from "./componenets/FeedbackStat";
import FeedbackForm from "./componenets/FeedbackForm";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
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
    <BrowserRouter>
      <Box
        className='container'
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
