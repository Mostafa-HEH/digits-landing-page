import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Hidden from "@mui/material/Hidden";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "../../assets/images/logo.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    ...theme.typography.tab,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.lightBlue,
    padding: "4rem ",
    fontSize: ".8rem",
    // position: "absolute",
    // width: "100%",
    // zIndex: "1301",
    [theme.breakpoints.down("md")]: {
      padding: "4rem 0",
    },
  },
  linkHead: {
    fontSize: ".9rem",
    color: theme.palette.common.textColor,
    paddingBottom: "2em",
  },
  link: {
    color: theme.palette.common.lightBlue,
    textDecoration: "none",
  },
  socialIcon: {
    color: theme.palette.common.lightBlue,
    textDecoration: "none",
  },
  copyTerms: {
    fontSize: ".7rem",
  },
  copyright: {
    color: theme.palette.common.lightBlue50,
  },
  terms: {
    color: theme.palette.common.lightBlue,
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={4} flexDirection="column" wrap="nowrap">
        <Grid item container wrap="nowrap" justifyContent="space-around">
          <Grid
            item
            container
            flexDirection="column"
            wrap="nowrap"
            width="25em"
          >
            <Grid
              item
              className={classes.linkHead}
              component={Link}
              to="/"
              onClick={() => props.setTabValue(0)}
            >
              <img src={logo} alt="digits company logo" />
            </Grid>
            <Grid item>
              Digits is a website template built to work seamlesy with the
              wordPress block editor to create beautifuly designed pages in
              minutes.
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid
              item
              container
              flexDirection="column"
              wrap="nowrap"
              width="auto"
              spacing={1}
            >
              <Grid item className={classes.linkHead}>
                Pages
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => props.setTabValue(0)}
              >
                Home
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/company"
                onClick={() => props.setTabValue(2)}
              >
                About
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/company"
                onClick={() => props.setTabValue(2)}
              >
                News
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/products"
                onClick={() => props.setTabValue(1)}
              >
                Pricing
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => props.setTabValue(0)}
              >
                Contact
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid
              item
              container
              flexDirection="column"
              wrap="nowrap"
              width="auto"
              spacing={1}
            >
              <Grid item className={classes.linkHead}>
                Demos
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/products"
                onClick={() => props.setTabValue(1)}
              >
                Classic
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/products"
                onClick={() => props.setTabValue(1)}
              >
                Boxy
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/products"
                onClick={() => props.setTabValue(1)}
              >
                Gradient
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/products"
                onClick={() => props.setTabValue(1)}
              >
                Minimal
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/products"
                onClick={() => props.setTabValue(1)}
              >
                Nigth
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid
              item
              container
              flexDirection="column"
              wrap="nowrap"
              width="auto"
              spacing={1}
            >
              <Grid item className={classes.linkHead}>
                Resourses
              </Grid>
              <Grid item container spacing={1}>
                <Grid
                  item
                  className={classes.socialIcon}
                  component="a"
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <FacebookIcon />
                </Grid>
                <Grid
                  item
                  className={classes.socialIcon}
                  component="a"
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <InstagramIcon />
                </Grid>
                <Grid
                  item
                  className={classes.socialIcon}
                  component="a"
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <TwitterIcon />
                </Grid>
                <Grid
                  item
                  className={classes.socialIcon}
                  component="a"
                  href="https://www.youtube.com"
                  target="_blank"
                >
                  <YouTubeIcon />
                </Grid>
                <Grid
                  item
                  className={classes.socialIcon}
                  component="a"
                  href="https://www.github.com"
                  target="_blank"
                >
                  <GitHubIcon />
                </Grid>
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/comapny"
                onClick={() => props.setTabValue(2)}
              >
                Download now
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/company"
                onClick={() => props.setTabValue(2)}
              >
                Documentation
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item>
          <Divider variant="middle" />
        </Grid>
        <Grid
          item
          container
          className={classes.copyTerms}
          justifyContent="space-around"
          spacing={1}
        >
          <Grid
            item
            className={classes.copyright}
            xs={12}
            sm={6}
            textAlign="center"
          >
            Copyright &copy; 2021 coded by Mostafa Hassan
          </Grid>
          <Grid
            item
            container
            className={classes.terms}
            spacing={1}
            xs={12}
            sm={6}
            alignContent="flex-end"
            justifyContent="center"
          >
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/company"
              onClick={() => props.setTabValue(2)}
            >
              Privacy Policy
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/company"
              onClick={() => props.setTabValue(2)}
            >
              Terms Of Use
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/company"
              onClick={() => props.setTabValue(2)}
            >
              GDBR
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
