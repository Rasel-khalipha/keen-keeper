import React from "react";
import { useLoaderData, useParams } from "react-router";
import FriendDetailsCardLeft from "../../components/FriendDetailsCard/FriendDetailsCardLeft/FriendDetailsCardLeft";
import FriendDetailsCardRight from "../../components/FriendDetailsCard/FriendDetailsCardRight/FriendDetailsCardRight";

const FriendsDetails = () => {
	const { id } = useParams();
	const friends = useLoaderData();
	const expectedFriend = friends.find((friend) => friend.id === parseInt(id));
	console.log(expectedFriend, "expectedFriend");

	const {
		name,
		picture,
		email,
		days_since_contact,
		status,
		tags,
		bio,
		goal,
		last_contacted,
		next_due_date,
	} = expectedFriend;

	if (!expectedFriend) {
		return (
			<div className="min-h-screen flex items-center justify-center p-8">
				<p className="text-center text-lg font-medium text-[#334155]">
					Friend not found. Please go back to the friends list.
				</p>
			</div>
		);
	}

	return (
		<>
			<div className="w-[73.4%] mx-auto py-20">
				<div className=" flex flex-col lg:flex-row items-center gap-6">
					<div className="w-full md:max-w-[350px]">
						<FriendDetailsCardLeft
							name={name}
							picture={picture}
							email={email}
							status={status}
							tags={tags}
							bio={bio}
						/>
					</div>
					<div className="max-w-[736px]">
						<FriendDetailsCardRight
							next_due_date={next_due_date}
							goal={goal}
							days_since_contact={days_since_contact}
							last_contacted={last_contacted}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default FriendsDetails;
