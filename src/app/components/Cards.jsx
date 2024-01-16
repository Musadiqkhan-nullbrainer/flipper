import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const transition = {
  type: "spring", // This can be 'tween' as well, depending on the effect you want
  duration: 0.1, // Adjust duration for smoothness
  bounce: 0.03, // For spring type, control the 'bounce'
  ease: "easeInOut", // Easing function for smoothness
};
const Cards = ({ list, id }) => {
  return (
    <div className="cards">
      <div className="card-detail-row card-header">
        <p className="m-0 p-0">17 Bets Total</p>
        <p className="m-0 p-0 d-flex align-items-center justify-content-center">
          <img className="mr-2" src={"/images/currency.svg"} alt="$" />
          139.10
        </p>
      </div>
      <AnimatePresence>
        {list
          .sort((a, b) => b.id - a.id)
          .map((item, index) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition }}
                exit={{ opacity: 0, transition }}
                key={item?.id}
              >
                <div className="card-detail-row mt-2" key={item.id}>
                  <p className="m-0 p-0 d-flex align-items-center justify-content-center">
                    <img className="mr-2" src={"/images/bitmoji.svg"} alt="F" />
                    FenRik
                  </p>
                  <p className="m-0 p-0">{item.id}</p>
                </div>
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
