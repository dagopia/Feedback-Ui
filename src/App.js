import React, { useState } from "react";

import Header from "./componenets/Header";
import FeedbackItem from "./componenets/FeedbackItem";
import { Box } from "@mui/system";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./componenets/FeedbackList";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <Box className='container' sx={{}}>
      <Header />
      <div>
        <FeedbackList feedback={feedback} />
        {/* <FeedbackItem /> */}
      </div>
    </Box>
  );
};
export default App;
