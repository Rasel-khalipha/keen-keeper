import { useState } from "react";
import { FriendContext } from "./FriendContext";
import { toast } from "react-toastify";

const FriendContextProvider = ({ children }) => {
	const [voiceCall, setVoiceCall] = useState([]);
	const [message, setMessage] = useState([]);
	const [videoCall, setVideoCall] = useState([]);

	const handleCall = (currentFriend) => {
		const isExistVoiceCall = voiceCall.find(
			(call) => call.id === currentFriend.id,
		);
		if (isExistVoiceCall) {
			toast.error("This Friend already exist for call");
			return;
		}

		setVoiceCall([...voiceCall, currentFriend]);
		toast.success(`${currentFriend.name} is added to call`);
	};

	const handleMessage = (currentFriend) => {
		const isExistMessage = message.find((text) => text.id === currentFriend.id);

		if (isExistMessage) {
			toast.error("This message already exist for message");
			return;
		}
		setMessage([...message, currentFriend]);
		toast.success(`${currentFriend.name} is added to message`);
	};

	const handleVideoCall = (currentFriend) => {
		const isExistVideoCall = videoCall.find(
			(video) => video.id === currentFriend.id,
		);

		if (isExistVideoCall) {
			toast.error("This friend already exist for video call");
			return;
		}

		setVideoCall([...videoCall, currentFriend]);
		toast.success(`${currentFriend.name} is added to video call`);
	};

	const data = {
		voiceCall,
		handleCall,
		message,
		handleMessage,
		videoCall,
		handleVideoCall,
	};

	return (
		<FriendContext.Provider value={data}>{children}</FriendContext.Provider>
	);
};

export default FriendContextProvider;
