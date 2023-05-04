import { Card, Typography, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackForm = () => {
  const [text, SetTtext] = useState("");
  const [rating, SetRating] = useState(10);

  const [btnDisabled, SetbtnDisabled] = useState(true);

  const [message, SetMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  useEffect(() => {
    console.log("Hello");
    if (feedbackEdit.edit === true) {
      SetbtnDisabled(false);
      SetTtext(feedbackEdit.item.text);
      SetRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (text === "") {
      SetbtnDisabled(true);
      SetMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      SetMessage("Text must be at least 10 characters");
      SetbtnDisabled(true);
    } else {
      SetMessage(null);
      SetbtnDisabled(false);
    }
    SetTtext(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      // if (feedbackEdit.edit === true) {
      //   updateFeedback(feedbackEdit.item.id, newFeedback);
      // } else {
      //   addFeedback(newFeedback);
      // }

      SetTtext("");
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "white",
        color: "black",
        maxWidth: "340px",
        fontWeight: "700px",
        borderRadius: "18px",
        p: 3,
        display: "flex",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => SetRating(rating)} />
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
            disabled={btnDisabled}
            sx={{ backgroundColor: "#ff6a95", color: "white" }}
          >
            Send
          </Button>
        </Box>
        {message && <Box>{message}</Box>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
