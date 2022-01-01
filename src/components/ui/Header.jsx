import React, { Fragment, useState, useEffect, cloneElement } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled, useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import logo from "../../assets/images/logo.svg";
import CustomButton from "./Button";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  pushDown: { ...theme.mixins.toolbar },
}));

const AppBarCustom = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
}));

const TabsCustom = styled(Tabs)(({ theme }) => ({
  marginLeft: 32,
}));

const TabCustom = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
}));

const PhoneTabCustom = styled(Typography)(({ theme }) => ({
  ...theme.typography.tab,
  marginLeft: "auto",
  marginRight: 40,
  textDecoration: "none",
  [theme.breakpoints.down("lg")]: {
    marginRight: 16,
  },
}));

const MenuItemCustom = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.tab,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const MenuIconButtonCustom = styled(IconButton)(({ theme }) => ({
  marginLeft: "auto",
}));

const MenuIconCustom = styled(MenuIcon)(({ theme }) => ({
  height: 32,
  width: 32,
  color: theme.palette.common.textColor,
}));

const ListItemCustom = styled(ListItem)(({ theme }) => ({
  ...theme.typography.tab,
}));

const ListItemBtnCustom = styled(ListItem)(({ theme }) => ({
  ...theme.typography.tab,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  textAlign: "center",
  marginTop: "auto",
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setopenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [openNestedList, setOpenListedList] = useState(false);

  const menuItemOptions = [
    { name: "Company", link: "/company" },
    { name: "History", link: "/company/history" },
    { name: "Works", link: "/company/works" },
    { name: "Testmonials", link: "/company/testmonials" },
  ];

  const open = Boolean(anchorEl);
  const MenuItemsHandleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const MenuItemHandleClose = (e) => {
    setAnchorEl(null);
    props.setTabValue(2);
  };

  const MenuItemHandleClick = (e, i) => {
    setAnchorEl(null);
    props.setTabValue(2);
    props.setSelectedMenuItem(i);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (props.tabValue !== 0) props.setTabValue(0);
        break;
      case "/products":
        if (props.tabValue !== 1) props.setTabValue(1);
        break;
      case "/company":
        if (props.tabValue !== 2) props.setTabValue(2);
        break;
      case "/company/history":
        if (props.tabValue !== 2) {
          props.setTabValue(2);
          props.setSelectedMenuItem(1);
        }
        break;
      case "/company/works":
        if (props.tabValue !== 2) {
          props.setTabValue(2);
          props.setSelectedMenuItem(2);
        }
        break;
      case "/company/testmonials":
        if (props.tabValue !== 2) {
          props.setTabValue(2);
          props.setSelectedMenuItem(3);
        }
        break;
      case "/pricing":
        if (props.tabValue !== 3) props.setTabValue(3);
        break;
      case "/blog":
        if (props.tabValue !== 4) props.setTabValue(4);
        break;

      default:
        props.setTabValue(0);
        break;
    }
  }, [props]);

  const tabs = (
    <Fragment>
      <TabsCustom
        value={props.tabValue}
        onChange={(e, value) => props.setTabValue(value)}
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
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onMouseOver={MenuItemsHandleHover}
          label="Company"
          component={Link}
          to="/company"
          icon={<KeyboardArrowDownIcon />}
          iconPosition="end"
        />
        <TabCustom
          disableRipple
          label="Pricing"
          component={Link}
          to="/pricing"
        />
        <TabCustom disableRipple label="Blog" component={Link} to="/blog" />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={MenuItemHandleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            onMouseLeave: MenuItemHandleClose,
          }}
          elevation={0}
        >
          {menuItemOptions.map(({ name, link }, i) => (
            <MenuItemCustom
              key={i}
              onClick={(e) => MenuItemHandleClick(e, i)}
              component={Link}
              to={link}
              selected={i === props.selectedMenuItem && props.tabValue === 2}
            >
              {name}
            </MenuItemCustom>
          ))}
        </Menu>
      </TabsCustom>
      <PhoneTabCustom component="a" href="tel:+00 0123 456789">
        +00 0123 456789
      </PhoneTabCustom>
      <CustomButton variant="contained">Contact Us</CustomButton>
    </Fragment>
  );

  const swiberDrawer = (
    <Fragment>
      <MenuIconButtonCustom onClick={() => setopenDrawer(!openDrawer)}>
        <MenuIconCustom />
      </MenuIconButtonCustom>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        onOpen={() => setopenDrawer(true)}
      >
        <div className={classes.pushDown} />
        <List value={props.tabValue}>
          <ListItemCustom
            divider
            button
            component={Link}
            to="/"
            onClick={() => {
              props.setTabValue(0);
              setopenDrawer(false);
            }}
            selected={props.tabValue === 0}
          >
            <ListItemText>Home</ListItemText>
          </ListItemCustom>
          <ListItemCustom
            divider
            button
            component={Link}
            to="/products"
            onClick={() => {
              props.setTabValue(1);
              setopenDrawer(false);
            }}
            selected={props.tabValue === 1}
          >
            <ListItemText>Products</ListItemText>
          </ListItemCustom>
          <ListItemCustom
            divider
            button
            onClick={() => {
              props.setTabValue(2);
              setOpenListedList(!openNestedList);
            }}
            selected={props.tabValue === 2}
          >
            <ListItemText>Company</ListItemText>
            {openNestedList ? <ExpandLess /> : <ExpandMore />}
          </ListItemCustom>
          <Collapse in={openNestedList} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemCustom
                divider
                button
                component={Link}
                to="/company"
                onClick={() => {
                  props.setSelectedMenuItem(0);
                  props.setTabValue(2);
                  setopenDrawer(false);
                }}
                selected={props.selectedMenuItem === 0}
              >
                <ListItemIcon>
                  <ReadMoreIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>Company</ListItemText>
              </ListItemCustom>
              <ListItemCustom
                divider
                button
                component={Link}
                to="/company/history"
                onClick={() => {
                  props.setSelectedMenuItem(1);
                  props.setTabValue(2);
                  setopenDrawer(false);
                }}
                selected={props.selectedMenuItem === 1}
              >
                <ListItemIcon>
                  <ReadMoreIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>History</ListItemText>
              </ListItemCustom>
              <ListItemCustom
                divider
                button
                component={Link}
                to="/company/works"
                onClick={() => {
                  props.setSelectedMenuItem(2);
                  props.setTabValue(2);
                  setopenDrawer(false);
                }}
                selected={props.selectedMenuItem === 2}
              >
                <ListItemIcon>
                  <ReadMoreIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>Works</ListItemText>
              </ListItemCustom>
              <ListItemCustom
                divider
                button
                component={Link}
                to="/company/testmonials"
                onClick={() => {
                  props.setSelectedMenuItem(3);
                  props.setTabValue(2);
                  setopenDrawer(false);
                }}
                selected={props.selectedMenuItem === 3}
              >
                <ListItemIcon>
                  <ReadMoreIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>Testmonials</ListItemText>
              </ListItemCustom>
            </List>
          </Collapse>
          <ListItemCustom
            divider
            button
            component={Link}
            to="/pricing"
            onClick={() => {
              props.setTabValue(3);
              setopenDrawer(false);
            }}
            selected={props.tabValue === 3}
          >
            <ListItemText>Pricing</ListItemText>
          </ListItemCustom>
          <ListItemCustom
            divider
            button
            component={Link}
            to="/blog"
            onClick={() => {
              props.setTabValue(4);
              setopenDrawer(false);
            }}
            selected={props.tabValue === 4}
          >
            <ListItemText>Blog</ListItemText>
          </ListItemCustom>
          <ListItemCustom
            divider
            button
            component="a"
            href="tel:+00 0123 456789"
          >
            <ListItemIcon>
              <CallIcon color="primary" />
            </ListItemIcon>
            <ListItemText>+00 0123 456789</ListItemText>
          </ListItemCustom>
          <ListItemBtnCustom divider button>
            <ListItemText>Contact Us</ListItemText>
          </ListItemBtnCustom>
        </List>
      </SwipeableDrawer>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBarCustom position="fixed" color="secondary">
          <Toolbar>
            <Link to="/" onClick={() => props.setTabValue(0)}>
              <img src={logo} alt="digits logo" />
            </Link>
            {matches ? swiberDrawer : tabs}
          </Toolbar>
        </AppBarCustom>
      </ElevationScroll>
      <div className={classes.pushDown}></div>
    </Fragment>
  );
};

export default Header;
