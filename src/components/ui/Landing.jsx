import React from "react";
import { makeStyles } from "@mui/styles";

import HeroSection from "./HeroSection.landing";
import LogosSection from "./LogosSection.landing";

const useStyles = makeStyles((theme) => ({
  sectionsMargin: { ...theme.mixins.toolbar },
  placeHolder: {
    backgroundColor: "#f4f43f",
    width: "100%",
    height: "16px",
  },
}));

const Landing = () => {
  const { placeHolder, sectionsMargin } = useStyles();

  return (
    <div>
      <div className={sectionsMargin} />
      <HeroSection />
      <div className={sectionsMargin} />
      <LogosSection />
      <div className={sectionsMargin} />
      <div className={placeHolder} />
    </div>
  );
};

export default Landing;
