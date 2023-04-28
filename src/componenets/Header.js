import React from "react";

export default function Header({ title, body, bgColor, textColor }) {
  const HeaderStyle = {
    padding: "2px",
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={HeaderStyle}>
      <div className='header'>
        <h1>{title}</h1>
      </div>
    </header>
  );
}
Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
