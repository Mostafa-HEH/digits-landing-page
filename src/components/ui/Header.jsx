import React, { Fragment, useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  pushDown: { ...theme.mixins.toolbar },
}));

const TabsCustom = styled(Tabs)(({ theme }) => ({
  marginLeft: "64px",
}));

const TabCustom = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
}));

const PhoneTabCustom = styled(Typography)(({ theme }) => ({
  ...theme.typography.tab,
  marginLeft: "auto",
  marginRight: 40,
  textDecoration: "none",
}));

const ButtonCustom = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  textTransform: "none",
  fontSize: "0.9rem",
}));

const Header = (props) => {
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" && tabValue !== 0) {
      setTabValue(0);
    } else if (window.location.pathname === "/products" && tabValue !== 1) {
      setTabValue(1);
    } else if (window.location.pathname === "/company" && tabValue !== 2) {
      setTabValue(2);
    } else if (window.location.pathname === "/pricing" && tabValue !== 3) {
      setTabValue(3);
    } else if (window.location.pathname === "/blog" && tabValue !== 4) {
      setTabValue(4);
    }
  }, [tabValue]);

  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Link to="/" onClick={() => setTabValue(0)}>
              <img src={logo} alt="digits logo" />
            </Link>
            <TabsCustom
              value={tabValue}
              onChange={(e, value) => setTabValue(value)}
              indicatorColor="secondary"
            >
              <TabCustom disableRipple label="Home" component={Link} to="/" />
              <TabCustom
                disableRipple
                label="Products"
                component={Link}
                to="/products"
              />
              <TabCustom
                disableRipple
                label="Company"
                component={Link}
                to="/company"
              />
              <TabCustom
                disableRipple
                label="Pricing"
                component={Link}
                to="/pricing"
              />
              <TabCustom
                disableRipple
                label="Blog"
                component={Link}
                to="/blog"
              />
            </TabsCustom>
            <PhoneTabCustom component="a" href="tel:+00 0123 456789">
              +00 0123 456789
            </PhoneTabCustom>
            <ButtonCustom variant="contained" component={Link} to="/contactus">
              Contact Us
            </ButtonCustom>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.pushDown}></div>
    </Fragment>
  );
};

export default Header;
