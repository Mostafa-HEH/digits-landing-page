import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import graphic from "../../assets/images/Graphic (1).png";
import figmaIcon from "../../assets/images/Icon-2.svg";
import layoutIcon from "../../assets/images/Icon-1.svg";
import fastIcon from "../../assets/images/Icon.svg";

const useStyles = makeStyles((theme) => ({
  dvider: {
    height: "1.2px",
    backgroundColor: theme.palette.common.lightBlue50,
    width: "100%",
    opacity: "0.3",
  },
  graphImage: {
    width: "470px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  heading: {
    ...theme.typography.h2,
    maxWidth: "431px",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em",
      width: "90%",
      margin: "auto",
    },
  },
  catagoriesContainer: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  typoContainer: {
    [theme.breakpoints.down("md")]: {
      alignContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },
}));

const AboutSection = () => {
  const { dvider, graphImage, heading, catagoriesContainer, typoContainer } =
    useStyles();

  return (
    <Grid container justifyContent="center" spacing={4} paddingTop="5rem">
      <Grid item>
        <h2 className={heading}>Whatever work you do, we're able to help</h2>
      </Grid>
      <Grid item container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <img className={graphImage} src={graphic} alt="stuff" />
        </Grid>
        <Grid item container flexDirection="column" xs={12} md={6} spacing={4}>
          <Grid item container className={catagoriesContainer}>
            <Grid item md={2}>
              <img src={figmaIcon} alt="figmaIcon" />
            </Grid>
            <Grid
              item
              container
              className={typoContainer}
              md={10}
              flexDirection="column"
              spacing={4}
            >
              <Grid item>
                <Typography variant="h5">Design and Assets</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Make your brand stand out with pixel-perfect design crafted to
                  perfection.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div className={dvider} />
          </Grid>
          <Grid item container className={catagoriesContainer}>
            <Grid item md={2}>
              <img src={layoutIcon} alt="layoutIcon" />
            </Grid>
            <Grid
              item
              container
              className={typoContainer}
              md={10}
              flexDirection="column"
              spacing={4}
            >
              <Grid item>
                <Typography variant="h5">Easy Content</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Import your demos or build pages visually. Bonus: All images
                  and illustrations included!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div className={dvider} />
          </Grid>
          <Grid item container className={catagoriesContainer}>
            <Grid item md={2}>
              <img src={fastIcon} alt="fastIcon" />
            </Grid>
            <Grid
              item
              container
              className={typoContainer}
              md={10}
              flexDirection="column"
              spacing={4}
            >
              <Grid item>
                <Typography variant="h5">Fast and Reliable</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  No heavy-weight plugins.No builders. No unneccesary file
                  loading. Pure WordPress.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
