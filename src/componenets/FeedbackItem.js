import { Button } from "@mui/base";
import { Card, Typography, Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Rating from "@mui/material/Rating";

const FeedbackItem = ({ item, select }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const handleClick = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };
  const [selected, setSelected] = useState(3);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  const [rating, setRating] = useState(2);
  const [text, setText] = useState("This is Example of Feedback item");

  return (
    <Card
      className='card'
      sx={{
        backgroundColor: "white",
        color: "#ff6a95",

        maxWidth: "300px",
        fontWeight: "bold",
        borderRadius: "18px",
        m: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Rating
        name='simple-controlled'
        value={item.rating}
        onChange={handleChange}
        readOnly
        sx={{ my: 1 }}
      />
      <Box sx={{ display: "flex", mx: 2 }}>
        <Typography className='text-display' sx={{ my: 1, color: "black" }}>
          {item.text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "right",
            mx: 2,
          }}
        >
          <CloseIcon type='button' onClick={(id) => deleteFeedback(item.id)} />
          <EditIcon
            type='button'
            sx={{ ml: 2 }}
            onClick={() => editFeedback(item)}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default FeedbackItem;
