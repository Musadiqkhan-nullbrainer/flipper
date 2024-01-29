import React, { useState, useEffect } from "react";
const PreviousRolls = ({ previousRolls, hide }) => {
	const [iconsCount, setIconsCount] = useState({
		gray: 0,
		black: 0,
		golden: 0,
	});

	const [icons, setIcons] = useState(
		previousRolls.length > 0 ? [...previousRolls] : []
	);
	useEffect(() => {
		if (!hide) {
			const last100Rolls = previousRolls.slice(-100);
			setIconsCount({
				black: last100Rolls.filter((value) => value === "win14x").length,
				gray: last100Rolls.filter((value) => value === "win2xSilver").length,
				golden: last100Rolls.filter((value) => value === "win2x").length,
			});
			if (previousRolls.length > 10) {
				setIcons((prevIcons) => previousRolls.slice(-10));
			} else {
				setIcons([...previousRolls]);
			}
			console.log("Previous rolls: ", previousRolls);
		}
	}, [hide, previousRolls]);

	return (
		<div className="previous-roll-wrapper">
			<h4 className="rolls-heading top-rolls-heading mb-0">Previous rolls</h4>
			<div
				className="d-flex alig-items-center justify-content-center icon-container position-relative flex-wrap"
				style={{
					width: "400px",
					marginLeft: "-65px",
					padding: "2px 0px",
					paddingLeft: "7px",
				}}>
				{icons.map((icon, index) => (
					<div key={index} className="icon">
						<img
							src={
								icon === "win2x"
									? "/images/Coin3.svg"
									: icon === "win2xSilver"
									? "/images/Coin1.svg"
									: "/images/Coin2.svg"
							}
							alt="icon"
						/>
					</div>
				))}
			</div>

			<div className="d-flex align-items-center right-coins ">
				<h4 className="rolls-heading mb-0 mx-3">Last 100</h4>
				<img
					src={"/images/Coin1.svg"}
					alt="coin"
					className="mr-2"
					width={"24px"}
				/>
				<h4 className="mb-0 coin-heading mr-2">{iconsCount.gray}</h4>
				<img
					src={"/images/Coin2.svg"}
					alt="coin"
					className="mx-1"
					width={"24px"}
				/>
				<h4 className="mb-0 coin-heading mr-2">{iconsCount.black}</h4>
				<img
					src={"/images/Coin3.svg"}
					alt="coin"
					className="mx-1"
					width={"24px"}
				/>
				<h4 className="mb-0 coin-heading">{iconsCount.golden}</h4>
			</div>
		</div>
	);
};

export default PreviousRolls;
