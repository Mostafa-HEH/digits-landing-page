import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import ButtonCustom from "./Button";
import portfolioCatagory from "../../assets/images/Graphic (2).png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFF9EA",
    paddingTop: "5rem",
  },
  image: {
    width: "100%",
  },
  subTitle: {
    ...theme.typography.h2,
    maxWidth: "300px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em",
      width: "90%",
      margin: "auto",
    },
  },
}));

const PortfolioSection = () => {
  const { container, image, subTitle } = useStyles();
  return (
    <Grid
      container
      className={container}
      flexDirection="column"
      alignItems="center"
      spacing={4}
    >
      <Grid item>
        <Typography variant="h2">Simplicity meets innovative design</Typography>
      </Grid>
      <Grid item>
        <Typography className={subTitle} variant="body1">
          It's realy easy to start using Digits. Install the theme, choose a
          demo and start designing the future of your business!
        </Typography>
      </Grid>
      <Grid item>
        <ButtonCustom variant="contained">Buy Digits</ButtonCustom>
      </Grid>
      <Grid item>
        <img className={image} src={portfolioCatagory} alt="sites catagories" />
      </Grid>
    </Grid>
  );
};

export default PortfolioSection;
