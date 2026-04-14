import React from "react";
import Card from "../ui/CardUi/Card";

const AllFriends = ({ friends }) => {
	console.log(friends);

	return (
		<>
			<div className="grid grid-cols-4 gap-6">
				{friends.map((friend) => (
					<div key={friend.id}>
						<Card friend={friend} />
					</div>
				))}
			</div>
		</>
	);
};

export default AllFriends;
