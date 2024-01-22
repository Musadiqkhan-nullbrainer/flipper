import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Messages = () => {
  const data = [
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
      color: "green",
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
  const [message, setMessage] = useState([]);
  useEffect(() => {
    setNewData(data);
  }, []);

  const transition = {
    type: "spring", // This can be 'tween' as well, depending on the effect you want
    duration: 0.1, // Adjust duration for smoothness
    bounce: 0.03, // For spring type, control the 'bounce'
    ease: "easeInOut", // Easing function for smoothness
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData([
      ...newData,
      {
        id: message,
        img: "/images/bitmoji.svg",
        name: "Fenrik",
        payment: message,
        color: "red",
      },
    ]);
    setMessage("");
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
                key={data?.message}
              >
                <div className="mt-3">
                  <span className="m-0 p-0 ">
                    <img className="mr-2" src={data?.img} alt="F" />
                    <span
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      {" "}
                      <div
                        className="color mr-2"
                        style={{
                          backgroundColor: data?.color,
                        }}
                      ></div>
                    </span>
                    <span className="name mr-2"> {data?.name}</span>

                    <span className="payment text-break mr-2">
                      {data?.payment}
                    </span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="mt-4 messages-input d-flex align-items-center justify-content-between">
        <form onSubmit={handleSubmit} className="w-100 d-flex">
          <input
            className=""
            type="text"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            placeholder="Type Message"
            style={{ width: "90%" }}
          />
          <img src="/images/more.svg" className="cpointer" />
        </form>
      </div>
    </div>
  );
};

export default Messages;
