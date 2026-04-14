import React from "react";
import { Link } from "react-router";

const Card = ({ friend }) => {
	return (
		<>
			<Link
				to={`/friendDetails/${friend.id}`}
				className="card bg-white shadow-sm pt-6 h-full flex flex-col"
			>
				<figure className="w-20 h-20 overflow-hidden rounded-full mx-auto">
					<img
						src={friend.picture}
						alt={friend.name}
						className="w-full h-full object-cover"
					/>
				</figure>
				<div className="card-body justify-center text-center">
					<h2 className="card-title justify-center">{friend.name}</h2>
					<p>{friend.days_since_contact}d ago</p>
					<div>
						{friend.tags.map((tag, ind) => (
							<div
								key={ind}
								className="badge badge-soft badge-success mr-2 capitalize mt-2 mb-2"
							>
								{tag}
							</div>
						))}
					</div>
					<div className="card-actions justify-center">
						<span
							className={`capitalize cursor-pointer ${
								friend.status === "overdue"
									? "bg-[#EF4444] text-white font-medium text-sm py-1.5 px-2 rounded-full"
									: friend.status === "almost due"
										? "bg-[#EFAD44] text-white font-medium text-sm py-1.5 px-2 rounded-full"
										: "bg-[#244D3F] text-white font-medium text-sm py-1.5 px-2 rounded-full"
							}`}
						>
							{friend.status}
						</span>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Card;
