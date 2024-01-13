import React, { useState } from "react";
import PreviousRolls from "./PreviousRolls";

const BetAmount = () => {
  const [number, setNumber] = useState(0.0);
  return (
    <div className="w-100">
      <PreviousRolls />
      <div className="bet-amount-wrapper my-3 mx-auto">
        <img src={"/images/currency-big.svg"} alt="$" />
        <input
          className="bet-input mx-2"
          type="number"
          value={number}
          placeholder="Enter bet amount..."
        />
        <div className="divider" />
        <div className="badge-wrapper">
          <div className="bet-badge cpointer" onClick={() => setNumber(0.0)}>
            Clear
          </div>
          <div
            className="bet-badge cpointer"
            onClick={() => setNumber((prevNumber) => prevNumber + 0.01)}
          >
            +0.01
          </div>
          <div
            className="bet-badge cpointer"
            onClick={() => setNumber((prevNumber) => prevNumber + 0.1)}
          >
            +0.1
          </div>
          <div
            className="bet-badge cpointer"
            onClick={() => setNumber((prevNumber) => prevNumber + 1)}
          >
            +1
          </div>
          <div
            className="bet-badge cpointer"
            onClick={() => setNumber((prevNumber) => prevNumber + 10)}
          >
            +10
          </div>
          <div
            className="bet-badge cpointer"
            onClick={() => setNumber((prevNumber) => prevNumber + 100)}
          >
            +100
          </div>
          <div
            className="bet-badge cpointer"
            onClick={() => setNumber((prevNumber) => prevNumber / 2)}
          >
            1/2
          </div>
          <div
            className="bet-badge cpointer"
            onClick={() => setNumber((prevNumber) => prevNumber * 2)}
          >
            X2
          </div>
          <div className="bet-badge cpointer">MAX</div>
        </div>
      </div>
    </div>
  );
};

export default BetAmount;
