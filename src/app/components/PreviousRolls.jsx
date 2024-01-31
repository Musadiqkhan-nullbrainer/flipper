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
				// Reset animation classes
				document.querySelectorAll(".icon").forEach((el) => {
					el.classList.remove("fade-out");
				});
				setIcons((prevIcons) => previousRolls.slice(-10));
			} else {
				setIcons([...previousRolls]);
			}
		} else {
			document.querySelectorAll(".icon").forEach((el) => {
				el.classList.remove("pop-in");
			});
		}
	}, [hide, previousRolls]);

	return (
		<div className="previous-roll-wrapper">
			<h4 className="rolls-heading top-rolls-heading mb-2">Previous rolls</h4>
			<div
				className={`d-flex align-items-center justify-content-start ml-3 mb-2 icon-container position-relative flex-wrap`}
				style={{ padding: "2px 0px" }}>
				{icons.length > 0 ? (
					icons.map((icon, index) => (
						<div
							key={index}
							className={`icon ${
								index === 0 && previousRolls.length > 10 ? "fade-out" : ""
							} ${index === icons.length - 1 ? "pop-in" : ""}`}>
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
					))
				) : (
					<h4 className="mb-0 coin-heading ml-3">N/A</h4>
				)}
			</div>

			<div className="d-flex align-items-center right-coins px-2 pt-2 mb-2 pt-md-0">
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
