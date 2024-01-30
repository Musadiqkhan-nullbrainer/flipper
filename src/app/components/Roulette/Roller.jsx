import React, { useState, useEffect } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

const prizes = [
	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},

	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
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
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
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
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
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
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
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
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
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
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
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
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
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
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/JsZ4xzgz/Type-Silver.png",
		text: "win2xSilver",
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
	// {
	// 	image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
	// 	text: "win2x",
	// },
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
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
	{
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},
];
const winPrizeIndex = 2;
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

const prizeList = reproducedPrizeList.map((prize) => ({
	...prize,
	id:
		typeof crypto.randomUUID === "function"
			? crypto.randomUUID()
			: generateId(),
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
	const [count, setCount] = useState(0);
	const prizeIndex = Math.floor(prizes.length) + winPrizeIndex;
	const handleStart = () => {
		setStart(true);
		setCount(0);
		/* Here we spinning the roulette to the end
    because we neeed time to get a `prizeIndex`
    from a server */
		// setPrizeIndex(prizeList.length / 2);
	};
	useEffect(() => {
		console.log("WInprize: ", winPrizeIndex);
	}, [winPrizeIndex]);
	useEffect(() => {
		setPreviousRolls([...previousRolls, prizeList[prizeIndex]?.text]);
		console.log("win value set bet: ", prizeList[prizeIndex]?.text);

		setWinValue(prizeList[prizeIndex]?.text);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [prizeIndex]);
	useEffect(() => {
		console.log("win value: ", winValue);
	}, [winValue]);
	// Socket imitation

	const handlePrizeDefined = () => {
		console.log("🥳 Prize defined! 🥳");
		setStart(false);
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
				spinningTime={5}
				options={{ stopInCenter: true, withoutAnimation: true }}
			/>
		</>
	);
};

export default Roller;
