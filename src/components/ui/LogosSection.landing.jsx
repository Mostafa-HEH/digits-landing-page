import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import netflix from "../../assets/images/logo-1.png";
import drawKit from "../../assets/images/logo-2.png";
import figma from "../../assets/images/logo-3.png";
import max from "../../assets/images/logo-4.png";
import stripe from "../../assets/images/logo-5.png";
import google from "../../assets/images/logo-6.png";
import disney from "../../assets/images/logo-7.png";

const LogosSection = () => {
  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item>
        <Typography variant="h4" textAlign="center">
          Trusted by forward-thinking software teams around the world
        </Typography>
      </Grid>
      <Grid item container justifyContent="space-around" spacing={2}>
        <Grid item>
          <img src={netflix} alt="netflix" />
        </Grid>
        <Grid item>
          <img src={drawKit} alt="drawKit" />
        </Grid>
        <Grid item>
          <img src={figma} alt="figma" />
        </Grid>
        <Grid item>
          <img src={max} alt="max" />
        </Grid>
        <Grid item>
          <img src={stripe} alt="stripe" />
        </Grid>
        <Grid item>
          <img src={google} alt="google" />
        </Grid>
        <Grid item>
          <img src={disney} alt="disney" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogosSection;
