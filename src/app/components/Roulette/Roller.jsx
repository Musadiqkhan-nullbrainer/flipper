import React, { useState, useEffect } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

const prizes = [
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
		image: "https://i.postimg.cc/GHRDG69Y/Type-Gold.png",
		text: "win2x",
	},

	{
		image: "https://i.postimg.cc/MnQXLDcx/Type-Black.png",
		text: "win14x",
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
const prizeItemWidth = 100; // your custom value
const prizeItemHeight = 100; // your custom value

const Roller = ({
	hide,
	setPreviousRolls,
	previousRolls,
	winValue,
	setWinValue,
	setBetWon,
	sound,
}) => {
	const [start, setStart] = useState(false);
	const [count, setCount] = useState(0);
	const [prizeIndex, setPrizeIndex] = useState(
		Math.floor(Math.random() * Math.floor(prizes.length))
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
				sound && audio.play();
				setCount(count + 1);
				if (winValue) {
					setBetWon(winValue);
				}
			}
		}, 1000);
	};
	useEffect(() => {
		const rouletteProWrapper = document.querySelector(".roulette-pro-wrapper");
		// Create a new div element
		const newDiv = document.createElement("div");
		newDiv.setAttribute("data-testid", "design-top");
		newDiv.className = "roulette-pro-regular-design-top horizontal";
		// Append the new div to the top level of .roulette-pro-wrapper
		rouletteProWrapper.insertBefore(newDiv, rouletteProWrapper.firstChild);
	}, []);
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
				options={{ stopInCenter: true }}
				designPlugin={() => ({
					prizeItemWidth,
					prizeItemHeight,
				})}
				prizeItemRenderFunction={({ image }) => {
					return (
						<div
							className="roulette-pro-regular-prize-item"
							style={{ width: prizeItemWidth, height: prizeItemHeight }}>
							<div className={"roulette-pro-regular-prize-item-wrapper center"}>
								<div className="roulette-pro-regular-image-wrapper">
									<img
										className="roulette-pro-regular-prize-item-image"
										src={image}
										alt={"prize item"}
									/>
								</div>
							</div>
						</div>
					);
				}}
			/>
		</>
	);
};

export default Roller;
