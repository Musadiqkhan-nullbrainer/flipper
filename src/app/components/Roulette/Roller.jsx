import React, { useState, useEffect } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

const prizes = [
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
];
const reproductionArray = (array = [], length = 0) => [
	...Array(length)
		.fill("_")
		.map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
	...prizes,
	...reproductionArray(prizes, prizes.length * 3),
	...prizes,
	...reproductionArray(prizes, prizes.length * 10),
];

const generateId = () =>
	Date.now().toString(36) + Math.random().toString(36).substring(2);

const prizeList = prizes.map((prize) => ({
	...prize,
	id: generateId(),
}));

const Roller = ({
	hide,
	setPreviousRolls,
	previousRolls,
	winValue,
	setWinValue,
	setBetWon,
}) => {
	const [start, setStart] = useState(false);
	const [prizeIndex, setPrizeIndex] = useState(0);
	const [count, setCount] = useState(0);
	const handleStart = () => {
		setCount(0);
		/* Here we spinning the roulette to the end
    because we neeed time to get a `prizeIndex`
    from a server */
		setPrizeIndex(prizeList.length / 2);
	};

	useEffect(() => {
		if (prizeIndex === 0) {
			return;
		} else {
			if (prizes[prizeIndex]?.text) {
				setPreviousRolls([...previousRolls, prizes[prizeIndex]?.text]);
				setWinValue(prizes[prizeIndex]?.text);
			}
		}
		setStart(true);
		// Here you can trigger your socket event
	}, [prizeIndex]);
	useEffect(() => {
		console.log("win value: ", winValue);
	}, [winValue]);
	// Socket imitation
	useEffect(() => {
		if (start === false) {
			return;
		}
		// Server delay imitation
		const timeout = setTimeout(() => {
			const winPrizeIndex = Math.floor(Math.random() * prizes.length);
			setPrizeIndex(winPrizeIndex);
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, [start]);

	const handlePrizeDefined = () => {
		console.log("🥳 Prize defined! 🥳");
		setTimeout(() => {
			if (count === 0) {
				const audio = new Audio("/audio/confirm-audio.wav");
				audio.loop = false;
				audio.play();
				setCount(count + 1);
				console.log("win value set bet: ", prizeIndex);
				if (winValue) {
					console.log("win value: ", winValue);
					setBetWon(winValue);
				}
			}
		}, 1000);
	};
	useEffect(() => {
		hide && handleStart();
	}, [hide]);
	return (
		<>
			<RoulettePro
				prizes={prizeList}
				prizeIndex={prizeIndex}
				start={start}
				onPrizeDefined={handlePrizeDefined}
				spinningTime={3}
				options={{ stopInCenter: true, withoutAnimation: true }}
			/>
		</>
	);
};

export default Roller;
