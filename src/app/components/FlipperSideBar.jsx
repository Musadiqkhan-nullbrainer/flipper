// eslint-disable-next-line react/prop-types
"use client";
import React, { useEffect } from "react";
const FlipperSideBar = ({ sidebar, windowSize }) => {
	return (
		<div
			className={`${
				!windowSize ? "" : sidebar ? " active-bar " : "hide-bar "
			} sidebar `}>
			<div className="sidebar-li w-100 d-flex align-items-center mt-3">
				<img src={"/images/Coin.svg"} alt="coin" className="mr-2" /> Coinflip
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center ">
				<img src={"/images/Crash.svg"} alt="coin" className="mr-2" /> Crash
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center ">
				<img src={"/images/Plinko.svg"} alt="coin" className="mr-2" /> Plinko
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center ">
				<img src={"/images/Dice.svg"} alt="coin" className="mr-2" /> Dice
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center ">
				<img src={"/images/Wheel.svg"} alt="coin" className="mr-2" /> Lucky
				Wheel
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center active mb-5">
				<img src={"/images/Mines-Green.svg"} alt="coin" className="mr-2" />{" "}
				Mines
			</div>
			<div className="w-100 d-flex align-items-center pl-3 pr-3">
				<hr className="w-100 " />{" "}
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center mt-4">
				<img src={"/images/leaderboard.svg"} alt="coin" className="mr-2" />{" "}
				Leaderboard
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center ">
				<img src={"/images/statistics.svg"} alt="coin" className="mr-2" />{" "}
				Statistics
			</div>
			<div className="sidebar-li w-100 d-flex align-items-center">
				<img src={"/images/settings.svg"} alt="coin" className="mr-2" />{" "}
				Settings
			</div>
			<div className="d-flex w-100 align-items-center px-2 justify-content-center social position-absolute">
				<img src={"/images/twitter.svg"} alt="coin" className="mr-1" />
				<img src={"/images/link.svg"} alt="coin" className="ml-4" />
				<img src={"/images/me.svg"} alt="coin" className="ml-3" />
			</div>
		</div>
	);
};

export default FlipperSideBar;
