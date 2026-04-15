import React from "react";
import AllFriends from "../../components/AllFriends/AllFriends";
import { useLoaderData } from "react-router";
import BannerPage from "../Banner/BannerPage";

const HomePage = () => {
	const friends = useLoaderData();
	return (
		<>
			<div className="w-[73%] mx-auto pt-20">
				<BannerPage friends={friends} />

				<hr className="border border-[#E9E9E9] mb-10" />

				<div>
					<h2 className="font-semibold text-2xl text-[#1F2937] mb-4">
						Your Friends
					</h2>
					<div className="mb-20">
						<AllFriends friends={friends} />
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
