import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonCustom = styled(Button)(({ theme, secondary }) => ({
  borderRadius: "50px",
  textTransform: "none",
  fontSize: "0.9rem",
  color: secondary && theme.palette.common.lightBlue,
  borderColor: secondary && "#fff",
  backgroundColor: secondary && "#fff",
  boxShadow: theme.shadows[2],
  "&:hover": {
    borderColor: secondary && "transparent",
    backgroundColor: secondary && "#fff",
  },
}));

const CustomButton = ({ children, variant, secondary, startIcon }) => {
  return (
    <ButtonCustom
      variant={variant ? variant : null}
      startIcon={startIcon ? startIcon : null}
      secondary={secondary}
    >
      {children}
    </ButtonCustom>
  );
};

export default CustomButton;
