import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Atom } from "react-loading-indicators";

const RootLayout = () => {
	const navigation = useNavigation();
	return (
		<>
			<div>
				{navigation.state === "loading" && (
					<div className="fixed inset-0 flex justify-center items-center bg-white/60 z-50">
						<Atom color="#244D3F" size="medium" text="" textColor="" />
					</div>
				)}
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default RootLayout;
