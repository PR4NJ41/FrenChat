import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { GetApp as GetAppIcon } from "@mui/icons-material";
import { AccountContext } from "../../../context/AccountProvider";
import { downloadMedia, formatDate } from "../../../utils/common-utils";
import { iconPDF } from "../../../constants/data";

const Message = ({ message }) => {
	const { account } = useContext(AccountContext);

	return <>{account.sub === message.senderId ? 
		<div className="own">
			{message.type === "file" ? <ImageMessage message={message} /> : <TextMessage message={message} />}
		</div> 
		:
		<div className="wrapper">
		 	{message.type === "file" ? <ImageMessage message={message} /> : <TextMessage message={message} />}
		</div>}</>;
};

const TextMessage = ({ message }) => {
	return (
		<div className="textWrapper">
			<div className="text">{message.text}</div>
			<div className="time">{formatDate(message.createdAt)}</div>
		</div>
	);
};

const ImageMessage = ({ message }) => {
	return (
		<div style={{ position: "relative" }}>
			{message?.text?.includes(".pdf") ? (
				<div style={{ display: "flex" }}>
					<img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
					<Typography style={{ fontSize: 14 }}>{message.text.split("/").pop()}</Typography>
				</div>
			) : (
				<img style={{ width: 300, height: "100%", objectFit: "cover" }} src={message.text} alt={message.text} />
			)}
			<div classname="time">
				<GetAppIcon onClick={(e) => downloadMedia(e, message.text)} fontSize="small" style={{ marginRight: 10, border: "1px solid grey", borderRadius: "50%" }} />
				{formatDate(message.createdAt)}
			</div>
		</div>
	);
};

export default Message;
