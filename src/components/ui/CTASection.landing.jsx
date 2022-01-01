import React from "react";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";

import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    padding: "3rem 0",
  },
  header: {
    ...theme.typography.h2,
    color: "#fff",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  info: {
    ...theme.typography.body1,
    color: "#fff",
    fontWeight: "400",
    "& a": {
      color: "#FED385",
      textDecoration: "none",
    },
  },
  connectColor: {
    color: "#53C07E",
  },
}));

const CTA = () => {
  const { container, header, info, connectColor } = useStyles();
  return (
    <Grid container className={container} justifyContent="space-evenly">
      <Grid item xs={12} md={4}>
        <h2 className={header}>Ready to launch your next website?</h2>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={4}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<EmailIcon className={connectColor} />}
            secondary="true"
          >
            Get in touch now
          </Button>
        </Grid>
        <Grid item>
          <p className={info}>
            Or, take a peek inside our <a href="#">design studio</a>
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CTA;
