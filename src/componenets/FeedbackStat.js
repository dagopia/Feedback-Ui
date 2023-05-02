import { Box } from "@mui/system";
import React from "react";

const FeedbackStat = ({ feedback }) => {
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
