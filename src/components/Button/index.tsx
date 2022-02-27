import React from "react";
import "./style.css";

type Props = {
  text: string;
  handleClick: () => void;
};

const Button = (props: Props): JSX.Element => {
  const { text, handleClick } = props;

  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
