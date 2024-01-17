import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Messages = () => {
  const data = [
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "red",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "red",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "red",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "orange",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "red",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "golden",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "red",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "#534235",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "yellow",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "silver",
    },
    {
      img: "/images/bitmoji.svg",
      name: "Fenrik",
      payment: "ez money",
      color: "#AA9987",
    },
  ];
  let seq = 0;
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const newList = [...newData, data[seq++]];
      setNewData(newList);
    }, 5000);
  }, [newData]);

  const transition = {
    type: "spring", // This can be 'tween' as well, depending on the effect you want
    duration: 0.1, // Adjust duration for smoothness
    bounce: 0.03, // For spring type, control the 'bounce'
    ease: "easeInOut", // Easing function for smoothness
  };
  return (
    <div className="messages">
      <div className="messages-container">
        <AnimatePresence>
          {newData?.map((data) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition }}
                exit={{ opacity: 0, transition }}
                key={data?.name}
              >
                <div className="mt-3">
                  <p className="m-0 p-0 d-flex align-items-center ">
                    <img className="mr-2" src={data?.img} alt="F" />
                    <div
                      className="color mr-2"
                      style={{ backgroundColor: data?.color }}
                    ></div>
                    <p className="name mr-2"> {data?.name}</p>

                    <p className="payment mr-2">{data?.payment}</p>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="mt-4 messages-input d-flex align-items-center justify-content-between">
        <input className="" type="text" placeholder="Type Message" />
        <img src="/images/more.svg" className="cpointer" />
      </div>
    </div>
  );
};

export default Messages;
