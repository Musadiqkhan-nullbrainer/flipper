import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const transition = {
  type: "spring", // This can be 'tween' as well, depending on the effect you want
  duration: 0.1, // Adjust duration for smoothness
  bounce: 0.01, // For spring type, control the 'bounce'
  ease: "easeInOut", // Easing function for smoothness
};
const Cards = ({ list, id }) => {
  return (
    <div className="">
      <div className={list?.length > 10 ? "cards cards-10" : "cards"}>
        <div className="card-detail-row card-header">
          <p className="m-0 p-0">{list?.length} Bets Total</p>
          <p className="m-0 p-0 d-flex align-items-center justify-content-center">
            <img className="mr-2" src={"/images/currency.svg"} alt="$" />

            {list?.length > 0
              ? list
                  ?.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue?.id,
                    0
                  )
                  ?.toFixed(2)
              : 0?.toFixed(2)}
          </p>
        </div>
        <AnimatePresence>
          {list
            ?.sort((a, b) => b.id - a.id)
            .map((item, index) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7, transition }}
                  exit={{ opacity: 0, transition }}
                  key={item.id + "-" + index}
                >
                  <div
                    className="card-detail-row mt-2"
                    key={item.id + "-" + index}
                  >
                    <p className="m-0 p-0 d-flex align-items-center justify-content-center">
                      <img
                        className="mr-2"
                        src={"/images/bitmoji.svg"}
                        alt="F"
                      />
                      FenRik
                    </p>
                    <p className="m-0 p-0">{item.id?.toFixed(2)}</p>
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cards;
