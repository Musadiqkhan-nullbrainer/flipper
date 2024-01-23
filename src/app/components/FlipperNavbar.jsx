"use client";

import { useEffect, useState } from "react";
import Messages from "./Messages";

// eslint-disable-next-line react/prop-types
const FlipperNavbar = ({
  sidebar,
  setSidebar,
  setWindowSize,
  windowSize,
  showMessages,
  setShowMessages,
}) => {
  const showSidebar = () => setSidebar(!sidebar);
  const handleMessages = () => setShowMessages(!showMessages);

  const updateWindowDimensions = () => {
    const { width } = window.visualViewport;
    width <= 1000 && setSidebar(false);
    width > 1000 && setSidebar(true);
    width <= 1000 && setWindowSize(true);
    width > 1000 && setWindowSize(false);
  };

  useEffect(() => {
    // Initial call to set the correct window size on mount
    updateWindowDimensions();

    // Attach the event listener
    window.addEventListener("resize", updateWindowDimensions);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <>
      <div className="flipper-navbar">
        <div className="d-flex align-items-center mobile">
          {windowSize && (
            <div
              className="menu-bars mr-md-3 mr-0"
              onClick={() => showSidebar()}
            >
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          )}

          <img className="" src={"/images/Flipper-logo.svg"} alt="logo" />
        </div>
        <div className="wallet">
          <img src={"/images/wallet.svg"} alt="wallet" />
        </div>
        <div className="d-flex align-items-center menu-icons">
          <img src={"/images/search.svg"} alt="search" className="mx-2" />
          <img
            src={
              showMessages
                ? "/images/green-messages.svg"
                : "/images/message.svg"
            }
            alt="message"
            className="mx-2 cpointer"
            onClick={() => handleMessages()}
          />
          <img src={"/images/bell.svg"} alt="bell" className="mx-2" />
          <img src={"/images/user.svg"} alt="user" className="mx-2" />
        </div>

        {/* {showMessages && <Messages />} */}
      </div>
    </>
  );
};

export default FlipperNavbar;
