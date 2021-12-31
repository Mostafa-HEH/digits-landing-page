import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import heroIlust from "../../assets/images/Graphic.png";
import CustomButton from "./Button";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    position: "relative",
  },
  bg: {
    height: "85%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
    background: "rgb(242,249,255)",
    background:
      "linear-gradient(180deg, rgba(242,249,255,0.12) 0%, rgba(242,249,255,1) 100%)",
  },
  image: {
    width: "100%",
  },
}));

const HeroSection = () => {
  const { mainContainer, bg, image } = useStyles();

  return (
    <Grid
      container
      className={mainContainer}
      flexDirection="column"
      wrap="nowrap"
      alignContent="center"
      justifyContent="flex-start"
      alignItems="center"
      spacing={4}
    >
      <Grid item>
        <Typography variant="h1">
          Good design meets
          <br />
          great user experience
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">
          For everyone, from beginners to experts
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" spacing={3}>
        <Grid item>
          <CustomButton variant="contained">Buy Digits</CustomButton>
        </Grid>
        <Grid item>
          <CustomButton variant="outlined" secondary="true">
            See the Fearures
          </CustomButton>
        </Grid>
      </Grid>
      <Grid item>
        <img className={image} src={heroIlust} alt="massage" />
      </Grid>
      <Grid item container className={bg}></Grid>
    </Grid>
  );
};

export default HeroSection;
