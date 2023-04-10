import { Button } from "@mui/material";
import React from "react";

interface IconButtonProps {
  Icon: React.ElementType;
  title: string;
  onClick?: any;
  className?: string;
}
const IconButton = ({ Icon, title, onClick, className }: IconButtonProps) => {
  return (
    <Button
      className={className}
      variant="outlined"
      startIcon={<Icon />}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default IconButton;
