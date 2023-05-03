import React, { useState } from "react";
import Header from "./componenets/Header";
import { Box } from "@mui/system";
import FeedbackData from "./Data/FeedbackData";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import AboutIconLink from "./componenets/AboutIconLink";
import { FeedbackProvider } from "./Context/FeedbackContext";
const App = () => {
  return (
    <>
      <FeedbackProvider>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mx: 20,
              color: "white",
            }}
          >
            {" "}
            <AboutIconLink />
          </Box>
        </BrowserRouter>
      </FeedbackProvider>
    </>
  );
};
export default App;
