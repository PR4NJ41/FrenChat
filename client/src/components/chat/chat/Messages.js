import { useState, useEffect, useContext, useRef } from "react";
import { Box, styled } from "@mui/material";
import { io } from "socket.io-client";
import { getMessages, newMessages } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import Message from "./Message";
import Footer from "./Footer";

const Messages = ({ person, conversation }) => {
	const [messages, setMessages] = useState([]);
	const [incomingMessage, setIncomingMessage] = useState(null);
	const [value, setValue] = useState();
	const [file, setFile] = useState();
	const [image, setImage] = useState();

	const scrollRef = useRef();

	const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

	useEffect(() => {
		socket.current.on("getMessage", (data) => {
			setIncomingMessage({
				...data,
				createdAt: Date.now(),
			});
		});
	}, []);

	useEffect(() => {
		const getMessageDetails = async () => {
			let data = await getMessages(conversation?._id);
			setMessages(data);
		};
		getMessageDetails();
	}, [conversation?._id, person._id, newMessageFlag]);

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ transition: "smooth" });
	}, [messages]);

	useEffect(() => {
		incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages((prev) => [...prev, incomingMessage]);
	}, [incomingMessage, conversation]);

	const receiverId = conversation?.members?.find((member) => member !== account.sub);

	const sendText = async (e) => {
		let code = e.keyCode || e.which;
		if (!value) return;

		if (code === 13) {
			let message = {};
			if (!file) {
				message = {
					senderId: account.sub,
					receiverId: receiverId,
					conversationId: conversation._id,
					type: "text",
					text: value,
				};
			} else {
				message = {
					senderId: account.sub,
					conversationId: conversation._id,
					receiverId: receiverId,
					type: "file",
					text: image,
				};
			}

			socket.current.emit("sendMessage", message);

			await newMessages(message);

			setValue("");
			setFile();
			setImage("");
			setNewMessageFlag((prev) => !prev);
		}
	};

	return (
		<div>
			<div className="wrapperMessages">
				<div className="componentsMessages">
					{messages &&
						messages.map((message) => (
							<div className="containerMessages" ref={scrollRef}>
								<Message message={message} />
							</div>
						))}
				</div>
			</div>

			<div className="foo">
				<Footer sendText={sendText} value={value} setValue={setValue} setFile={setFile} file={file} setImage={setImage} />
			</div>
		</div>
	);
};

export default Messages;
