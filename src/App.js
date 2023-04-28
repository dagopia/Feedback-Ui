import React from "react";
import Header from "./componenets/Header";
import FeedbackItem from "./componenets/FeedbackItem";
import { Box } from "@mui/system";
const App = () => {
  return (
    <Box className='container' sx={{}}>
      <Header />
      <div>
        <FeedbackItem />
      </div>
    </Box>
  );
};
export default App;
