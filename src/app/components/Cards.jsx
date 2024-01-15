import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
let seq = 0;

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
      <motion.div layout layoutId={id}>
        <AnimatePresence>
          {list.map((item, index) => {
            return (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item}
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
      </motion.div>
    </div>
  );
};

export default Cards;
