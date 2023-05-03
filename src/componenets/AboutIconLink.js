import React from "react";
import { Link } from "react-router-dom";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
function AboutIconLink() {
  return (
    <div>
      <Link to='/about'>
        <QuestionMarkIcon sx={{ color: "#ff6a95" }} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
