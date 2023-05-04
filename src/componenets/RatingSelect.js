import { Box } from "@mui/system";
import React from "react";
import Rating from "@mui/material/Rating";

import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";
const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const [selected, setSelected] = useState(3);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <Rating name='simple-controlled' value={selected} onChange={handleChange} />
  );
};

export default RatingSelect;
