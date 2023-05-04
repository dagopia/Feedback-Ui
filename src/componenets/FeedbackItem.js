import { Button } from "@mui/base";
import { Card, Typography, Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const handleClick = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };

  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is Example of Feedback item");

  return (
    <Card
      className='card'
      sx={{
        backgroundColor: "white",
        color: "#ff6a95",
        // width: "300px",
        maxWidth: "300px",
        fontWeight: "bold",
        borderRadius: "18px",
        m: 2,
        p: 2,
        display: "flex",
      }}
    >
      <Typography
        className='num-display'
        sx={{
          position: "absolute",
          width: "20px",
          borderRadius: "50%",
          bgcolor: "#ff6a95",
          color: "white",
          p: 1,
          border: "1px solid white",
          margin: "-25px",
        }}
      >
        {item.rating}
      </Typography>
      <Typography className='text-display' sx={{ mx: 3, color: "black" }}>
        {item.text}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "left",
          m: 1,
        }}
      >
        <CloseIcon type='button' onClick={(id) => deleteFeedback(item.id)} />
        <EditIcon
          type='button'
          sx={{ ml: 2 }}
          onClick={() => editFeedback(item)}
        />
      </Box>
    </Card>
  );
};

export default FeedbackItem;
