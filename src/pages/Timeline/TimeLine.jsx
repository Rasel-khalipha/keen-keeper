import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext/FriendContext";
import TimelineCall from "../../components/timelineDetails/TimelineCall/TimelineCall";
import TimelineMessage from "../../components/timelineDetails/TimelineMessage/TimelineMessage";
import TimelineVideo from "../../components/timelineDetails/TimelineVideo/TimelineVideo";

const TimeLine = () => {
	const { voiceCall, message, videoCall } = useContext(FriendContext);

	const today = new Date();

	const formattedDate = today.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	// Combine all events (calls + messages) into a single timeline
	const timelineEvents = [
		...voiceCall.map((call) => ({ ...call, type: "call" })),
		...message.map((msg) => ({ ...msg, type: "message" })),
		...videoCall.map((vdo) => ({ ...vdo, type: "video" })),
	].sort((a, b) => a.id - b.id);

	return (
		<>
			<div className="w-[73.4%] mx-auto py-20 space-y-6">
				<h2 className="font-bold text-5xl text-[#1F2937] mb-6">Timeline</h2>
				{timelineEvents.length > 0 ? (
					timelineEvents.map((event) =>
						event.type === "call" ? (
							<TimelineCall
								key={`call-${event.id}`}
								friendCall={event}
								formattedDate={formattedDate}
							/>
						) : event.type === "message" ? (
							<TimelineMessage
								key={`message-${event.id}`}
								friend={event}
								formattedDate={formattedDate}
							/>
						) : (
							<TimelineVideo
								key={`video-${event.id}`}
								friendCall={event}
								formattedDate={formattedDate}
							/>
						),
					)
				) : (
					<p className="text-center text-[#64748B]">
						No interactions yet. Start calling or messaging friends!
					</p>
				)}
			</div>
		</>
	);
};

export default TimeLine;
