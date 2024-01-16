"use client";
import FlipperSideBar from "./FlipperSideBar";
import FlipperNavbar from "./FlipperNavbar";
import { useState, useEffect, Suspense } from "react";
import { SuspenseLoading } from "./SuspenseLoading";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	const [width, setWidth] = useState(1000);
	const [sidebar, setSidebar] = useState(width <= 1000 ? false : true);
	const [windowSize, setWindowSize] = useState(width <= 1000 ? true : false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const { width } = window.visualViewport;
		setSidebar(width <= 1000 ? false : true);
		setWidth(width);

		// Simulate a 2-second loading delay
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		// Clear the timeout when the component unmounts
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<div className="wrapper">
			<Suspense fallback={<SuspenseLoading />}>
				{isLoading ? (
					<SuspenseLoading />
				) : (
					<>
						<FlipperNavbar
							sidebar={sidebar}
							setSidebar={setSidebar}
							windowSize={windowSize}
							setWindowSize={setWindowSize}
						/>
						<div className="wrapper-sub-topbar w-100 d-flex">
							<FlipperSideBar sidebar={sidebar} windowSize={windowSize} />
							{children}
						</div>
					</>
				)}
			</Suspense>
		</div>
	);
};

export default Layout;
