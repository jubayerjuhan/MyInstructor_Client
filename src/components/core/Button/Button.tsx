import React from "react";
import "./Button.scss";

const Button = ({
  smallFont,
  revertColor,
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
        <p
          className={`theme-btn  ${revertColor ? "revert" : "btn-one"}`}
          style={{
            fontSize: smallFont ? "12px" : "",
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default Button;
