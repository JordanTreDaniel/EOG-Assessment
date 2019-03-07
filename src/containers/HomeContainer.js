import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import NowWhat from "../components/NowWhat";

const HomeContainer = props => {
  return (
    <>
      <NowWhat />
      <ToastContainer />
    </>
  );
};

export default HomeContainer;
