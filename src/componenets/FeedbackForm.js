import { Card, Typography, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const FeedbackForm = () => {
  const [text, SetTtext] = useState("");
  const handleChange = (e) => {
    SetTtext(e.target.value);
  };
  return (
    <Card
      sx={{
        backgroundColor: "white",
        color: "black",
        width: "320px",
        fontWeight: "700px",
        borderRadius: "18px",
        m: 2,
        p: 3,
        display: "flex",
      }}
    >
      <form>
        <h2>How would you rate your service with us?</h2>
        <Box>
          <TextField
            type='text'
            placeholder='Write a review'
            sx={{ mr: 1 }}
            onChange={handleChange}
            value={text}
          />
          <Button
            type='submit'
            variant='contained'
            sx={{ backgroundColor: "#ff6a95", color: "white" }}
          >
            Send
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default FeedbackForm;
