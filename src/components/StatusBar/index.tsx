import React from "react";
import "./style.css";

type Props = {
  innerWidth: string,
};

const StatusBar = ({ innerWidth }: Props): JSX.Element => {
  return (
    <div id="wrapper">
      <div id="inner" style={{ width: innerWidth }}></div>
    </div>
  );
};

export default StatusBar;
