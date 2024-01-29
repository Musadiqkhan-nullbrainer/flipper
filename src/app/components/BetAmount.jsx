import React, { useState } from "react";

const BetAmount = () => {
	const [number, setNumber] = useState(0);
	return (
		<div className="bet-amount-wrapper  ">
			<img src={"/images/currency-big.svg"} alt="$" />
			<input
				className="bet-input mx-2"
				type="number"
				value={number > 0.0 ? number : ""}
				placeholder="Enter bet amount..."
				onChange={(e) => setNumber(e.currentTarget.value)}
			/>
			<div className="divider" />
			<div className="badge-wrapper">
				<div className="bet-badge cpointer" onClick={() => setNumber(0.0)}>
					Clear
				</div>
				<div
					className="bet-badge cpointer"
					onClick={() =>
						setNumber((prevNumber) => (Number(prevNumber) + 0.01)?.toFixed(2))
					}>
					+0.01
				</div>
				<div
					className="bet-badge cpointer"
					onClick={() =>
						setNumber((prevNumber) => (Number(prevNumber) + 0.1)?.toFixed(2))
					}>
					+0.1
				</div>
				<div
					className="bet-badge cpointer"
					onClick={() =>
						setNumber((prevNumber) => (Number(prevNumber) + 1)?.toFixed(2))
					}>
					+1
				</div>
				<div
					className="bet-badge cpointer"
					onClick={() =>
						setNumber((prevNumber) => (Number(prevNumber) + 10)?.toFixed(2))
					}>
					+10
				</div>
				<div
					className="bet-badge cpointer"
					onClick={() =>
						setNumber((prevNumber) => (Number(prevNumber) + 100)?.toFixed(2))
					}>
					+100
				</div>
				<div
					className="bet-badge cpointer"
					onClick={() =>
						setNumber((prevNumber) => (Number(prevNumber) / 2)?.toFixed(2))
					}>
					1/2
				</div>
				<div
					className="bet-badge cpointer"
					onClick={() =>
						setNumber((prevNumber) => (Number(prevNumber) * 2)?.toFixed(2))
					}>
					X2
				</div>
				<div className="bet-badge cpointer">MAX</div>
			</div>
		</div>
	);
};

export default BetAmount;
