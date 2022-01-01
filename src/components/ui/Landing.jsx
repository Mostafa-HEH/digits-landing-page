import React from "react";
import { makeStyles } from "@mui/styles";

import HeroSection from "./HeroSection.landing";
import LogosSection from "./LogosSection.landing";
import AboutSection from "./AboutSection.landing";
import PortfolioSection from "./PortfolioSection.landing";
import TestimonialsSection from "./TestimonialsSection.landing";
import CTA from "./CTASection.landing";

const useStyles = makeStyles((theme) => ({
  sectionsMargin: {
    height: "5em",
  },
}));

const Landing = () => {
  const { sectionsMargin } = useStyles();

  return (
    <div>
      <div className={sectionsMargin} />
      <HeroSection />
      <div className={sectionsMargin} />
      <LogosSection />
      <div className={sectionsMargin} />
      <AboutSection />
      <div className={sectionsMargin} />
      <PortfolioSection />
      <div className={sectionsMargin} />
      <TestimonialsSection />
      <div className={sectionsMargin} />
      <CTA />
    </div>
  );
};

export default Landing;
