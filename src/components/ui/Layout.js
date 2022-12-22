import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Wrapper from "./styled/Layout.styled";

const Layout = () => {
  const location = useLocation();
  let bg;

  if (location.pathname === "/") {
    bg = "home";
  } else {
    bg = location.pathname.slice(1);
  }

  return (
    <Wrapper className={`app ${bg}`}>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
