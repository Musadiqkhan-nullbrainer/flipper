"use client";
import FlipperSideBar from "./FlipperSideBar";
import FlipperNavbar from "./FlipperNavbar";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [width, setWidth] = useState("");
  const [sidebar, setSidebar] = useState(width <= 1000 ? false : true);
  const [windowSize, setWindowSize] = useState(width <= 1000 ? true : false);
  useEffect(() => {
    const { width } = window.visualViewport;
    setSidebar(width <= 1000 ? false : true);
    setWidth(width <= 1000 ? true : false);
    setWidth(width);
  }, []);
  return (
    <div className="wrapper">
      <FlipperNavbar
        sidebar={sidebar}
        setSidebar={setSidebar}
        windowSize={windowSize}
        setWindowSize={setWindowSize}
      />
      <div className="wrapper-sub-topbar w-100 d-flex">
        <FlipperSideBar sidebar={sidebar} windowSize={windowSize} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
