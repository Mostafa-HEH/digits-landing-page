import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem",
  },
  cardContainer: {
    height: "100%",
  },
}));

const TestimonialsSection = () => {
  const { cardContainer, container } = useStyles();

  return (
    <Grid container className={container} spacing={4} justifyContent="center">
      <Grid item>
        <Typography variant="h2">What others are saying</Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item md={4}>
          <Card variant="outlined" className={cardContainer}>
            <CardContent>
              <Typography variant="body1">
                Completely beautiful website and amazing support! This is my
                second website from this author and i love both of the sites so
                much and she has helped me so well when i needed it !
              </Typography>
            </CardContent>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  H
                </Avatar>
              }
              title="Happy User"
              subheader="facebook.com"
            />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined" className={cardContainer}>
            <CardContent>
              <Typography variant="body1">
                Realy easy to use and customize. easy to understand. Darinka
                helped me with my site! She answers very quickly, a good
                service! Thank you very much!
              </Typography>
            </CardContent>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
                  R
                </Avatar>
              }
              title="Happy User"
              subheader="facebook.com"
            />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined" className={cardContainer}>
            <CardContent>
              <Typography variant="body1">
                Realy pleasing to look at! Documentation (including installation
                instructions) are clear and that is comming from relatively new
                WordPress user
              </Typography>
            </CardContent>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                  U
                </Avatar>
              }
              title="Happy User"
              subheader="facebook.com"
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestimonialsSection;
