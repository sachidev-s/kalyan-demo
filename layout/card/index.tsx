import React from "react";
import Box, { BoxProps } from "../box";

const Card: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <Box className={`card ${className || ""}`} {...props}>
      {children}
    </Box>
  );
};

export default Card;
