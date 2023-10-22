import { React, useContext } from "react";
import "./chat.css";
import { AccountContext } from "../../../context/AccountProvider";
import { defaultProfilePicture } from "../../../constants/data";

const ChatHeader = ({ person }) => {
	const url = person.picture || defaultProfilePicture;
	const { activeUsers } = useContext(AccountContext);

	return (
		<div className="header">
			<img className="imgHeader" src={url} alt="display picture" style={{ display: "flex", width: 40, height: 40, objectfit: "cover", borderRadius: "50%" }} />
			<div>
				<div className="nameHeader">{person.name}</div>
				<div className="statusHeader">{activeUsers?.find((user) => user.sub === person.sub) ? "Online" : "Offline"}</div>
			</div>
		</div>
	);
};

export default ChatHeader;
