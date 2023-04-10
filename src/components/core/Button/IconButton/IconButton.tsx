import { Button } from "@mui/material";
import React from "react";

interface IconButtonProps {
  Icon: React.ElementType;
  title: string;
  onClick?: () => void;
}
const IconButton = ({ Icon, title, onClick }: IconButtonProps) => {
  return (
    <Button variant="outlined" startIcon={<Icon />} onClick={onClick}>
      {title}
    </Button>
  );
};

export default IconButton;
