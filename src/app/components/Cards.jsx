import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const transition = {
  type: "spring",
  stiffness: 700, // Increase this to reduce downward movement
  damping: 55, // Increase for smoother motion
  mass: 0.2, // Adjust if needed to control the speed of the movement
  duration: 0.9, // Optional, consider removing if using spring physics
  bounce: 0.1, // Optional, can be adjusted for more/less 'bounce'
  ease: "easeInOut", // Can be kept or removed, as spring physics primarily control the movement
};
const Cards = ({ list, id, number }) => {
  return (
    <div className="">
      <div
        className={
          number != "550" && list?.length == 0
            ? "cards cards-100"
            : list?.length > 10
            ? "cards cards-10"
            : "cards"
        }
      >
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
                  <div className="card-detail-row mt-2">
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
