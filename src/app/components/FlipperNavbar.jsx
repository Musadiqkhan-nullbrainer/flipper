import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const FlipperNavbar = ({ sidebar, setSidebar, setWindowSize, windowSize }) => {
	const showSidebar = () => setSidebar(!sidebar);

	const updateWindowDimensions = () => {
		const { width } = window.visualViewport;
		width <= 1000 && setSidebar(false);
		width > 1000 && setSidebar(true);
		width <= 1000 && setWindowSize(true);
		width > 1000 && setWindowSize(false);
	};

	useEffect(() => {
		// Initial call to set the correct window size on mount
		updateWindowDimensions();

		// Attach the event listener
		window.addEventListener("resize", updateWindowDimensions);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("resize", updateWindowDimensions);
		};
	}, []);

	return (
		<>
			<div className="flipper-navbar">
				<div className="d-flex align-items-center">
					{windowSize && (
						<div className="menu-bars mr-3" onClick={() => showSidebar()}>
							<div className="bar" />
							<div className="bar" />
							<div className="bar" />
						</div>
					)}

					<img src={"/images/Flipper-logo.svg"} alt="logo" />
				</div>
				<img className="ml-5" src={"/images/wallet.svg"} alt="wallet" />
				<div className="d-flex align-items-center justify-content-between">
					<img src={"/images/search.svg"} alt="search" className="mx-2" />
					<img src={"/images/message.svg"} alt="message" className="mx-2" />
					<img src={"/images/bell.svg"} alt="bell" className="mx-2" />
					<img src={"/images/user.svg"} alt="user" className="mx-2" />
				</div>
			</div>
		</>
	);
};

export default FlipperNavbar;
