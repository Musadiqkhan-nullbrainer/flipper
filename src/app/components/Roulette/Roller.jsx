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
	const [prizeIndex, setPrizeIndex] = useState(
		Math.floor(Math.random() * prizes.length)
	);
	const handleStart = () => {
		setStart(true);
		setCount(0);
	};

	useEffect(() => {
		setPreviousRolls([...previousRolls, prizeList[prizeIndex]?.text]);
		setWinValue(prizeList[prizeIndex]?.text);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [prizeIndex]);

	const handlePrizeDefined = () => {
		// console.log("🥳 Prize defined! 🥳");
		setTimeout(() => {
			if (count === 0) {
				const audio = new Audio("/audio/confirm-audio.wav");
				audio.loop = false;
				audio.play();
				setCount(count + 1);
				if (winValue) {
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
				// options={{
				// 	withoutAnimation: true,
				// }}
				classes={{
					prizeItem: "prize-item-roulette",
					wrapper: "roulette-wrap",
					prizeListWrapper: "roulette-list-wrap",
				}}
			/>
		</>
	);
};

export default Roller;
