import React from "react";
import { emptyChatImage } from "../../../constants/data";

const EmptyChat = () => {
	return (
		<div>
			<img src={emptyChatImage} alt="empty" style={{ marginTop: 100, width: 400 }} />
			<h1>WhatsApp Web</h1>
			<h2>Click on Any Chat to see messages.</h2>
		</div>
	);
};

export default EmptyChat;
