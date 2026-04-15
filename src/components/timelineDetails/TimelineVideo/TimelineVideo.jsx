import React from "react";
import vdoImg from "../../../assets/video.png";

const TimelineVideo = ({ friendCall, formattedDate }) => {
	return (
		<>
			<div>
				<div className="flex items-center gap-4 p-4 border border-[#E9E9E9] rounded-lg bg-white shadow-sm">
					<img src={vdoImg} alt="video" />
					<div>
						<h3 className="font-medium text-xl text-[#244D3F]">
							Video Call{" "}
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

export default TimelineVideo;
