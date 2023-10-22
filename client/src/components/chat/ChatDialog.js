import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import "./ChatDialog.css";

import Menu from "./menu/Menu.js";
import ChatBox from "./chat/ChatBox.js";
import EmptyChat from "./chat/EmptyChat.js";

const ChatDialog = () => {
	const { person } = useContext(UserContext);

	return (
		<div className="mainDialog">
			<div className="component">
				<div className="leftComponent">
					<Menu className="leftComponent" />
				</div>
				<div className="rightComponent">{Object.keys(person).length ? <ChatBox /> : <EmptyChat />}</div>
			</div>
		</div>
	);
};

export default ChatDialog;
