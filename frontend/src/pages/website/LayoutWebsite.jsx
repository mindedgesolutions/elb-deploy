import React from "react";
import { Outlet } from "react-router-dom";

import "../../assets/website/css/bootstrap.min.css";
import "../../assets/website/css/style.css";
import "../../assets/website/css/resposive.css";

import { WbFooter, WbSecondNav, WbTopnav } from "../../components";

const LayoutWebsite = () => {
  return (
    <>
      <WbTopnav />
      <WbSecondNav />
      <main>
        <Outlet />
      </main>
      <WbFooter />
    </>
  );
};

export default LayoutWebsite;
