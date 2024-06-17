import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginBtn = () => {
  return (
    <>Google Btn</>
    // <GoogleLogin
    //   onSuccess={(credentialResponse) => {
    //     console.log(credentialResponse);
    //   }}
    //   onError={() => {
    //     console.log("Login Failed");
    //   }}
    // />
  );
};

export default GoogleLoginBtn;
