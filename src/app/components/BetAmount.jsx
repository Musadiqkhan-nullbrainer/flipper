import PreviousRolls from "./PreviousRolls";

const BetAmount = () => {
	return (
		<div className="w-100">
			<PreviousRolls />
			<div className="bet-amount-wrapper my-3 mx-auto">
				<img src={"/images/currency-big.svg"} alt="$" />
				<input
					className="bet-input mx-2"
					type="number"
					placeholder="Enter bet amount..."
				/>
				<div className="divider" />
				<div className="badge-wrapper">
					<div className="bet-badge">Clear</div>
					<div className="bet-badge">+0.01</div>
					<div className="bet-badge">+0.1</div>
					<div className="bet-badge">+1</div>
					<div className="bet-badge">+10</div>
					<div className="bet-badge">+100</div>
					<div className="bet-badge">1/2</div>
					<div className="bet-badge">X2</div>
					<div className="bet-badge">MAX</div>
				</div>
			</div>
		</div>
	);
};

export default BetAmount;
