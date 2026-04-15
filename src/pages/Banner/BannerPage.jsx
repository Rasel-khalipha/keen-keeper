import React from "react";
import { FiPlus } from "react-icons/fi";

const BannerPage = ({ friends }) => {
	return (
		<>
			<div>
				<div className="text-center">
					<h1 className="font-bold text-5xl text-[#1F2937] mb-4">
						Friends to keep close in your life
					</h1>
					<p className="font-normal text-base text-[#64748B] mb-8">
						Your personal shelf of meaningful connections. Browse, tend, and
						nurture the <br /> relationships that matter most.
					</p>
					<button className="bg-[#244D3F] font-semibold text-base text-white flex items-center px-4 py-3 rounded-sm gap-1 mx-auto cursor-pointer">
						<FiPlus />
						Add Friend
					</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-10">
					<div className="p-8 bg-white rounded-lg shadow-sm border border-[#ffffff] text-center">
						<h3 className="font-semibold text-[2rem] text-[#244D3F]">
							{friends.length}
						</h3>
						<p className="font-normal text-lg text-[#64748B]">Total Friends</p>
					</div>
					<div className="p-8 bg-white rounded-lg shadow-sm border border-[#ffffff] text-center">
						<h3 className="font-semibold text-[2rem] text-[#244D3F]">
							{friends.filter((friend) => friend.status === "on-track").length}
						</h3>
						<p className="font-normal text-lg text-[#64748B]">On Track</p>
					</div>
					<div className="p-8 bg-white rounded-lg shadow-sm border border-[#ffffff] text-center">
						<h3 className="font-semibold text-[2rem] text-[#244D3F]">
							{friends.filter((friend) => friend.status === "overdue").length}
						</h3>
						<p className="font-normal text-lg text-[#64748B]">Need Attention</p>
					</div>
					<div className="p-8 bg-white rounded-lg shadow-sm border border-[#ffffff] text-center">
						<h3 className="font-semibold text-[2rem] text-[#244D3F]">12</h3>
						<p className="font-normal text-lg text-[#64748B]">
							Interaction This Month
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerPage;
