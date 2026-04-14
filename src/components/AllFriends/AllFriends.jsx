import React from "react";
import { useLoaderData } from "react-router";

const AllFriends = () => {
	const friends = useLoaderData();
	console.log(friends);
	return (
		<>
			<div>AllFriends</div>
		</>
	);
};

export default AllFriends;
