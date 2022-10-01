import React from "react";
import "./Button.scss";

const Button = ({
  big,
  title = "Button",
  className,
  link,
  width,
  onClick,
}: any) => {
  return (
    <div
      onClick={onClick}
      className={`btn-box ${className}`}
      style={{ width: width ? width : "140px" }}
    >
      {link ? (
        <a href={link} className="theme-btn btn-one">
          {title}
        </a>
      ) : (
        <p className="theme-btn btn-one">{title}</p>
      )}
    </div>
  );
};

export default Button;
