import React from "react";
import phoneImg from "../../../assets/call.png";

const TimelineCall = ({ friendCall, formattedDate }) => {
	return (
		<>
			<div>
				<div
					className="flex items-center gap-4 p-4 border border-[#E9E9E9] rounded-lg bg-white shadow-sm"
				>
					<img src={phoneImg} alt="phone" />
					<div>
						<h3 className="font-medium text-xl text-[#244D3F]">
							Call{" "}
							<span className="font-normal text-lg text-[#64748B]">
								with {friendCall.name}
							</span>
						</h3>
						<p className="font-medium text-base text-[#64748B]">
							{formattedDate}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimelineCall;
