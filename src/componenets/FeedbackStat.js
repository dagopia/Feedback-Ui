import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const FeedbackStat = () => {
  const { feedback } = useContext(FeedbackContext);

  let avarage = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage Rating:{isNaN(avarage) ? 0 : avarage}</h4>
    </Box>
  );
};

export default FeedbackStat;
