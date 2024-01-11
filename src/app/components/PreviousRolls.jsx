const PreviousRolls = () => {
	return (
		<div className="previous-roll-wrapper">
			<h4 className="rolls-heading mb-0">Previous rolls</h4>
			<div
				className="previous-roll position-relative mb-0 mx-3"
				style={{
					transition: "none",
				}}>
				<div className="mask position-absolute z-3 "></div>
			</div>
			<div className="d-flex align-items-center right-coins">
				<h4 className="rolls-heading mb-0 mx-3">Last 100</h4>
				<img src={"/images/Coin1.svg"} alt="coin" className="mx-1" />
				<h4 className="mb-0 coin-heading">40</h4>
				<img src={"/images/Coin2.svg"} alt="coin" className="mx-1" />
				<h4 className="mb-0 coin-heading">4</h4>
				<img src={"/images/Coin3.svg"} alt="coin" className="mx-1" />
				<h4 className="mb-0 coin-heading">56</h4>
			</div>
		</div>
	);
};

export default PreviousRolls;
