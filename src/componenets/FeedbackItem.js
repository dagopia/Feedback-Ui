import { Button } from "@mui/base";
import { Card, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
const FeedbackItem = ({ item }) => {
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
        width: "400px",
        fontWeight: "bold",
        borderRadius: "18px",
        m: 2,
        p: 2,
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
          margin: "-25px",
        }}
      >
        {item.rating}
      </Typography>
      <Typography className='text-display' sx={{ p: 2, mx: 3, color: "black" }}>
        {item.text}
      </Typography>
      <Button onClick={handleClick}>Click</Button>
    </Card>
  );
};

export default FeedbackItem;
