import React from "react";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { LuVideo } from "react-icons/lu";

const FriendDetailsCardRight = ({
	days_since_contact,
	next_due_date,
	goal,
	last_contacted,
	handleCall,
	expectedFriend,
	handleMessage,
	handleVideoCall
}) => {
	const last = new Date(last_contacted);
	const due = new Date(next_due_date);
	const diffDays = Math.ceil((due - last) / (1000 * 60 * 60 * 24));
	return (
		<>
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="p-8 bg-white rounded-lg shadow-sm border border-[#ffffff] text-center w-full">
						<h3 className="font-semibold text-2xl text-[#244D3F]">
							{days_since_contact}
						</h3>
						<p className="font-normal text-lg text-[#64748B]">
							Days Since Contact
						</p>
					</div>
					<div className="p-8 bg-white rounded-lg shadow-sm border border-[#ffffff] text-center w-full">
						<h3 className="font-semibold text-2xl text-[#244D3F]">{goal}</h3>
						<p className="font-normal text-lg text-[#64748B]">Goal (Days)</p>
					</div>
					<div className="p-8 bg-white rounded-lg shadow-sm border border-[#ffffff] text-center w-full">
						<h3 className="font-semibold text-2xl text-[#244D3F]">
							{next_due_date}
						</h3>
						<p className="font-normal text-lg text-[#64748B]">Next Due</p>
					</div>
				</div>
				<div className="bg-white p-6 shadow-sm rounded-lg mt-6 mb-6">
					<div className="w-full">
						<div className="flex justify-between items-center">
							<h3 className="font-medium text-xl text-[#244D3F]">
								Relationship Goal
							</h3>
							<button className="btn btn-default font-medium text-sm text-[#1F2937]">
								Edit
							</button>
						</div>

						<p className="font-normal text-lg text-[#64748B] mt-4">
							Connect every{" "}
							<span className="font-bold text-lg text-[#1F2937]">
								{diffDays} Days
							</span>
						</p>
					</div>
				</div>
				<div className="p-6 bg-white rounded-lg">
					<h3 className="font-medium text-xl text-[#244D3F] mb-4">
						Quick Check-In
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div
							onClick={() => handleCall(expectedFriend)}
							className="bg-[#F8FAFC] p-4 shadow-sm rounded-lg text-center cursor-pointer"
						>
							<PiPhoneCallBold className="w-6.5 h-6.5 text-[#1F2937] mx-auto mb-2.5" />
							<p className="font-normal text-lg text-[#1F2937]">Call</p>
						</div>
						<div
							onClick={() => handleMessage(expectedFriend)}
							className="bg-[#F8FAFC] p-4 shadow-sm rounded-lg text-center cursor-pointer"
						>
							<RiMessage2Line className="w-6.5 h-6.5 text-[#1F2937] mx-auto mb-2.5" />
							<p className="font-normal text-lg text-[#1F2937]">Text</p>
						</div>
						<div
							onClick={() => handleVideoCall(expectedFriend)}
							className="bg-[#F8FAFC] p-4 shadow-sm rounded-lg text-center cursor-pointer"
						>
							<LuVideo className="w-6.5 h-6.5 text-[#1F2937] mx-auto mb-2.5" />
							<p className="font-normal text-lg text-[#1F2937]">Video</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FriendDetailsCardRight;
