import React from "react";

import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const FriendDetailsCardLeft = ({ name, picture, status, tags, bio, email }) => {
	return (
		<>
			<div>
				<div className="card bg-white shadow-sm pt-6 h-full flex flex-col">
					<figure className="w-20 h-20 overflow-hidden rounded-full mx-auto">
						<img
							src={picture}
							alt={name}
							className="w-full h-full object-cover"
						/>
					</figure>
					<div className="card-body justify-center text-center">
						<h2 className="card-title justify-center font-semibold text-xl text-[#1F2937]">
							{name}
						</h2>
						<div className="card-actions justify-center">
							<span
								className={`capitalize cursor-pointer ${
									status === "overdue"
										? "bg-[#EF4444] text-white font-medium text-sm py-1.5 px-2 rounded-full"
										: status === "almost due"
											? "bg-[#EFAD44] text-white font-medium text-sm py-1.5 px-2 rounded-full"
											: "bg-[#244D3F] text-white font-medium text-sm py-1.5 px-2 rounded-full"
								}`}
							>
								{status}
							</span>
						</div>
						<div>
							{tags.map((tag, ind) => (
								<div
									key={ind}
									className="badge badge-soft badge-success mr-2 capitalize mt-2 mb-2"
								>
									{tag}
								</div>
							))}
						</div>
						<p className="inter font-medium italic text-base text-[#64748B]">
							"{bio}"
						</p>
						<p className="font-normal text-sm text-[#64748B]">
							Preferred: {email}{" "}
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center py-4 px-15 lg:px-24.5 gap-2 bg-white shadow-sm font-medium text-base text-[#1F2937] border border-[#E9E9E9] rounded-sm mb-2 mt-2">
					<RiNotificationSnoozeLine /> Snooze 2 Weeks
				</div>
				<div className="flex justify-center items-center py-4 px-24.5 gap-2 bg-white shadow-sm font-medium text-base text-[#1F2937] border border-[#E9E9E9] rounded-sm mb-2">
					<FiArchive /> Archive
				</div>
				<div className="flex justify-center items-center py-4 px-24.5 gap-2 bg-white shadow-sm font-medium text-base text-[#EF4444] border border-[#E9E9E9] rounded-sm">
					<RiDeleteBinLine />
					Delete
				</div>
			</div>
		</>
	);
};

export default FriendDetailsCardLeft;
