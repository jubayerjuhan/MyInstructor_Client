import React from "react";
import "./Button.scss";

interface ButtonType {
  title: string;
  link: string;
}
const Button = ({ title = "Button", link = "/" }: ButtonType) => {
  return (
    <div className="btn-box">
      <a href={link} className="theme-btn btn-one">
        {title}
      </a>
    </div>
  );
};

export default Button;
