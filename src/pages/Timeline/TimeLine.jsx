import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext/FriendContext";
import TimelineCall from "../../components/timelineDetails/TimelineCall/TimelineCall";
import TimelineMessage from "../../components/timelineDetails/TimelineMessage/TimelineMessage";
import TimelineVideo from "../../components/timelineDetails/TimelineVideo/TimelineVideo";
import { FaAngleDown } from "react-icons/fa6";

const TimeLine = () => {
	const { voiceCall, message, videoCall } = useContext(FriendContext);

	const [filterType, setFilterType] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState("newest");

	const today = new Date();

	const formattedDate = today.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const allTimelineEvents = [
		...voiceCall.map((call) => ({ ...call, type: "call" })),
		...message.map((msg) => ({ ...msg, type: "message" })),
		...videoCall.map((vdo) => ({ ...vdo, type: "video" })),
	].sort((a, b) => a.id - b.id);

	const filteredByType = filterType
		? allTimelineEvents.filter((event) => event.type === filterType)
		: allTimelineEvents;

	const filteredBySearch = filteredByType.filter((event) => {
		const nameMatch = event.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const typeMatch = event.type
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return nameMatch || typeMatch;
	});

	const timelineEvents = [...filteredBySearch].sort((a, b) => {
		if (sortOrder === "newest") {
			return b.id - a.id;
		} else {
			return a.id - b.id;
		}
	});

	return (
		<>
			<div className="w-[73.4%] mx-auto py-20 space-y-6">
				<h2 className="font-bold text-5xl text-[#1F2937] mb-6">Timeline</h2>

				<div className="mb-6 text-center">
					<input
						type="text"
						placeholder="Search by friend name or interaction type..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="input input-bordered w-full max-w-2xl placeholder-[#64748B] text-[#1F2937]"
					/>
				</div>

				<div className="flex justify-between items-center">
					<div className="dropdown dropdown-start">
						<div
							tabIndex={0}
							role="button"
							className="btn m-1 max-w-[200px] flex justify-between font-normal text-lg text-[#64748B]"
						>
							{filterType ? (
								<>
									{filterType === "call"
										? "Call"
										: filterType === "message"
											? "Text"
											: "Video"}
								</>
							) : (
								"Filter timeline"
							)}{" "}
							<FaAngleDown />
						</div>
						<ul
							tabIndex="-1"
							className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
						>
							<li>
								<a onClick={() => setFilterType("")}>All</a>
							</li>
							<li>
								<a onClick={() => setFilterType("call")}>Call</a>
							</li>
							<li>
								<a onClick={() => setFilterType("message")}>Text</a>
							</li>
							<li>
								<a onClick={() => setFilterType("video")}>Video</a>
							</li>
						</ul>
					</div>

					<div className="dropdown dropdown-start">
						<div
							tabIndex={1}
							role="button"
							className="btn m-1 max-w-[200px] flex justify-between font-normal text-lg text-[#64748B]"
						>
							{sortOrder === "newest" ? "Newest First" : "Oldest First"}{" "}
							<FaAngleDown />
						</div>
						<ul
							tabIndex={1}
							className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
						>
							<li>
								<a onClick={() => setSortOrder("newest")}>Newest</a>
							</li>
							<li>
								<a onClick={() => setSortOrder("oldest")}>Oldest</a>
							</li>
						</ul>
					</div>
				</div>
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
