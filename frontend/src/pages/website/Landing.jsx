import React from "react";
import { WbHeroSection } from "../../components";

const Landing = () => {
  document.title = `Welcome to Easy Lending Buddy | ${
    import.meta.env.VITE_APP_TITLE
  }`;

  return (
    <>
      <WbHeroSection />
    </>
  );
};

export default Landing;
