"use client";
import { useEffect, useState } from "react";
import CardBars from "@components/CardBars"; // Assuming you have set up your import aliases correctly
import Cards from "@components/Cards"; // Adjust the path based on your project structure
import Layout from "@components/Layout";
import Table from "@components/Table";
import BetAmount from "@components/BetAmount";
import Roller from "@components/Roulette/Roller";
import PreviousRolls from "@components/PreviousRolls";

let seq = 0;
let seqs = 1;
const Home = () => {
	const [number, setNumber] = useState(550);
	const [hide, setHide] = useState(false);
	const [counter, setCounter] = useState(12.45);
	const [list, setList] = useState([]);
	const [lists, setLists] = useState([]);
	const [listed, setListed] = useState([]);
	const [sound, setSound] = useState(true);
	const [betWon, setBetWon] = useState(null);
	const [previousRolls, setPreviousRolls] = useState([]);
	const [winValue, setWinValue] = useState(null);
	useEffect(() => {
		if (!hide) {
			setBetWon(null);
		}
	}, [hide]);
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (number != 550) {
			} else {
				const newList = [
					...list,
					{ id: seq + Math.floor(Math.random() * 6) + 1 },
				];
				newList?.sort((a, b) => b.id - a.id);
				setList(newList);

				const newLists = [
					...lists,
					{ id: seq + Math.floor(Math.random() * 5) + 1 },
				];
				newLists?.sort((a, b) => b.id - a.id);
				setLists(newLists);

				setListed([...listed, { id: seq + Math.floor(Math.random() * 5) + 1 }]);
			}
		}, 500);

		return () => clearTimeout(timeout);
	}, [list, number]);
	const newNum = 5000 + Math.random() * 6500;

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => {
				if (prevCounter <= 0) {
					const maxLimit = 15000;

					setHide(true);
					setNumber((prevNumber) => {
						return prevNumber === 550 ? newNum / 1.06 : prevNumber / 1.06;

						// const nextNumber = prevNumber * 1.02;
						// return nextNumber > maxLimit ? nextNumber / 1.4 : nextNumber;
					});
					return 0;
				}
				setHide(false);
				return prevCounter - 0.1;
			});
		}, 80);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (counter <= 0) {
				setNumber(550);

				setList([]);
				setListed([]);
				setLists([]);
				setTimeout(() => {}, 500);

				setCounter(12.45);

				return () => clearTimeout(newTimeout);
			}
		}, 12450); // 12.45 seconds
		return () => clearTimeout(timeout);
	}, [counter]);
	useEffect(() => {
		const imageWrappers = document.querySelectorAll(
			".roulette-pro-regular-image-wrapper"
		);

		// Iterate through each image wrapper
		imageWrappers.forEach((wrapper) => {
			// Get the image element within the current wrapper
			const image = wrapper.querySelector("img");

			// Clone the image element
			const clonedImage = image.cloneNode(true);

			// Append the cloned image to the wrapper (making it double)
			wrapper.appendChild(clonedImage);
		});
	}, []);
	return (
		<Layout>
			<div className="details-wrapper">
				<div className="detail-box">
					<div className="row align-items-center mb-4">
						<div className="col-md-8 col-6">
							<p className="title text-uppercase mb-0">Roulette</p>
						</div>
						<div className="col-md-4 col-6 d-flex justify-content-end">
							<div
								className="cpointer"
								style={{ width: "fit-content" }}
								onClick={() => {
									setSound(!sound);
								}}>
								<img src={"/images/soundon.svg"} />{" "}
								<span className="sound-text">
									{sound ? "Sound on" : "Sound off"}
								</span>
							</div>
						</div>
					</div>
					{!hide ? (
						<div
							className="roll bg-img d-flex align-items-center position-relative mb-5"
							style={{
								backgroundPosition: `center`,
							}}>
							<div
								className="d-flex position-relative w-100 justify-content-center flex-column align-items-center"
								style={{ background: "transparent" }}>
								<div className="rolling">ROLLING</div>
								<div className="count">
									{counter.toFixed(2) < 0.01 ? 0 : counter.toFixed(2)}
								</div>
							</div>
							{/* {!hide && <div className="mask position-absolute z-3 "></div>} */}
						</div>
					) : (
						<div
							className="roll  position-relative mb-5"
							style={{ height: "auto" }}>
							<Roller
								hide={hide}
								setBetWon={setBetWon}
								setWinValue={setWinValue}
								winValue={winValue}
								setPreviousRolls={setPreviousRolls}
								previousRolls={previousRolls}
								sound={sound}
							/>
						</div>
					)}
					<div className="w-100">
						<PreviousRolls previousRolls={previousRolls} hide={hide} />
						<BetAmount />
					</div>
					<div className="card-wrapper flex-md-wrap card-wrapper-padding">
						<div
							className="card-container mb-lg-0 mb-5"
							style={{
								opacity: hide ? (betWon === "win2xSilver" ? "1" : "0.5") : "1",
							}}>
							<CardBars
								image="/images/Coin1.svg"
								text="Win 2x"
								number={number}
							/>
							<Cards list={lists} id="first" number={number} />
						</div>
						<div
							className="card-container mb-lg-0 mb-5"
							style={{
								opacity: hide ? (betWon === "win14x" ? "1" : "0.5") : "1",
							}}>
							<CardBars
								image="/images/Coin2.svg"
								text="Win 14x"
								number={number}
							/>
							<Cards list={list} id="second" number={number} />
						</div>
						<div
							className="card-container mb-lg-0 mb-5"
							style={{
								opacity: hide ? (betWon === "win2x" ? "1" : "0.5") : "1",
							}}>
							<CardBars
								image="/images/Coin3.svg"
								text="Win 2x"
								number={number}
							/>
							<Cards list={listed} id="third" number={number} />
						</div>
					</div>
				</div>
				<Table />
			</div>
		</Layout>
	);
};

export default Home;
