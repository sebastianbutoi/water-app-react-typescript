import React from "react";
import "./style.css";

const StatusBar = ({ innerWidth }) => {
  return (
    <div id="wrapper">
      <div id="inner" style={{ width: innerWidth }}></div>
    </div>
  );
};

export default StatusBar;
