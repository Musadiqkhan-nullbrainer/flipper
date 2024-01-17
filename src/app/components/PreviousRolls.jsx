import React, { useState, useEffect } from "react";
const PreviousRolls = () => {
  const [number, setNumber] = useState(550);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNumber(40);
    }, 12450); // 12.45 seconds

    return () => clearTimeout(timeout);
  }, [number]);

  const [icons, setIcons] = useState([...Array(11).keys()]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIcons((prevIcons) => {
        let newIcons = [...prevIcons];
        let movedIcon = newIcons.shift(); // Remove the first icon
        newIcons.push(movedIcon); // Add it to the end
        return newIcons;
      });
    }, 63000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const getIconStyle = (index, iconNumber) => {
    const position = index * 5;
    const isMovingIcon = iconNumber === icons[0];
    return {
      transform: `translateX(${position}px)`,
      opacity: isMovingIcon ? 0 : 1, // Hide the moving icon
      backgroundImage: `url(${
        iconNumber % 2 == 0
          ? "/images/golden-coin.svg"
          : "/images/gray-coin.svg"
      })`,
    };
  };

  return (
    <div className="previous-roll-wrapper">
      <h4 className="rolls-heading mb-0">Previous rolls</h4>
      <div
        className="d-flex alig-items-center justify-content-center icon-container position-relative flex-wrap"
        style={{ width: "400px", marginLeft: "-65px" }}
      >
        {icons.map((iconNumber, index) => (
          <div
            key={iconNumber}
            className="icon"
            style={getIconStyle(index, iconNumber)}
          ></div>
        ))}
      </div>
      {/* <div
        className="previous-roll position-relative mb-0 mx-3"
        style={{
          transition: "none",
          backgroundPosition: `${number}px center`,
        }}
      >
        <div className="mask position-absolute z-3 "></div>
      </div> */}
      <div className="d-flex align-items-center right-coins">
        <h4 className="rolls-heading mb-0 mx-3">Last 100</h4>
        <img
          src={"/images/Coin1.svg"}
          alt="coin"
          className="mx-1"
          width={"24px"}
        />
        <h4 className="mb-0 coin-heading mr-2">40</h4>
        <img
          src={"/images/Coin2.svg"}
          alt="coin"
          className="mx-1"
          width={"24px"}
        />
        <h4 className="mb-0 coin-heading mr-2">4</h4>
        <img
          src={"/images/Coin3.svg"}
          alt="coin"
          className="mx-1"
          width={"24px"}
        />
        <h4 className="mb-0 coin-heading">56</h4>
      </div>
    </div>
  );
};

export default PreviousRolls;
