import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/UserProvider";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
	const { person } = useContext(UserContext);
	const { account } = useContext(AccountContext);

	const [conversation, setConversation] = useState({});

	useEffect(() => {
		const getConversationDetails = async () => {
			let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
			setConversation(data);
		};
		getConversationDetails();
	}, [person.sub]);

	return (
		<div style={{ height: "100%" }}>
			<ChatHeader person={person} />
			<Messages person={person} conversation={conversation} />
		</div>
	);
};

export default ChatBox;
