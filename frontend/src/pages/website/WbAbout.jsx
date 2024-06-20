import React from "react";
import {
  WbAboutCo,
  WbAboutCta,
  WbAboutFeatures,
  WbBreadCrumb,
  WbTestimonials,
} from "../../components";

const WbAbout = () => {
  document.title = `All About Easy Lending Buddy | ${
    import.meta.env.VITE_APP_TITLE
  }`;

  return (
    <>
      <WbBreadCrumb />
      <WbAboutFeatures />
      <WbAboutCo />
      <WbAboutCta />
      <WbTestimonials />
    </>
  );
};

export default WbAbout;
