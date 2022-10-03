import React from "react";
import "./Submitbutton.scss";

const Button = ({
  big,
  title = "Button",
  className,
  link,
  width,
  onClick,
}: any) => {
  return (
    <input
      type={"submit"}
      onClick={onClick}
      className={`heme-btn btn-one ${className}`}
      style={{ width: width ? width : "140px" }}
    ></input>
  );
};

export default Button;
