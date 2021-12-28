import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    ...theme.typography.tab,
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.footer}>footer</div>;
};

export default Footer;
