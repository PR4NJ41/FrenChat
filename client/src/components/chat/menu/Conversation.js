import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { UserContext } from "../../../context/UserProvider";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { emptyProfilePicture } from "../../../constants/data";
import { formatDate } from "../../../utils/common-utils";

const Conversation = ({ user }) => {
	const url = user.picture || emptyProfilePicture;

	const { setPerson } = useContext(UserContext);
	const { account, newMessageFlag } = useContext(AccountContext);

	const [message, setMessage] = useState({});

	useEffect(() => {
		const getConversationMessage = async () => {
			const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
			setMessage({ text: data?.message, timestamp: data?.updatedAt });
		};
		getConversationMessage();
	}, [newMessageFlag]);

	const getUser = async () => {
		setPerson(user);
		await setConversation({ senderId: account.sub, receiverId: user.sub });
	};

	return (
		<div className="smallConvBox" onClick={() => getUser()}>
			<img style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "50%", padding: "0 14px" }} src={url} alt="display picture" />

			<div style={{ width: "100%" }}>
				<div className="list">
					<Typography>{user.name}</Typography>
					{message?.text && <div className="time">{formatDate(message?.timestamp)}</div>}
				</div>
				<div>
					<div className="leftText">{message?.text?.includes("localhost") ? "media" : message.text}</div>
				</div>
			</div>
		</div>
	);
};

export default Conversation;
