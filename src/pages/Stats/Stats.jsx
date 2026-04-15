import React, { useContext } from "react";
import {
	Pie,
	PieChart,
	Cell,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { FriendContext } from "../../context/FriendContext/FriendContext";

const Stats = () => {
	const { message, voiceCall, videoCall } = useContext(FriendContext);

	const data = [
		{ name: "Video Calls", value: videoCall.length },
		{ name: "Text", value: message.length },
		{ name: "Voice Calls", value: voiceCall.length },
	];

	const COLORS = ["#244D3F", "#7E35E1", "#37A163"];

	return (
		<>
			<div className="w-[73.4%] mx-auto py-20">
				<h2 className="font-bold text-5xl text-[#1F2937] mb-12">
					Friendship Analytics
				</h2>

				<div className="border border-[#ffffff] bg-white shadow-sm p-8 rounded-lg">
					<p className="font-medium text-xl text-[#244D3F]">
						By Interaction Type
					</p>
					{data.some((item) => item.value > 0) ? (
						<ResponsiveContainer width="100%" height={400}>
							<PieChart>
								<Pie
									data={data}
									cx="50%"
									cy="50%"
									innerRadius={80}
									outerRadius={120}
									cornerRadius={10}
									fill="#8884d8"
									paddingAngle={5}
									dataKey="value"
									isAnimationActive={true}
								>
									{data.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index]} />
									))}
								</Pie>
								<Tooltip />
								<Legend />
							</PieChart>
						</ResponsiveContainer>
					) : (
						<p className="text-center text-[#64748B] text-lg mt-12">
							No interactions yet. Start calling or messaging friends!
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Stats;
