import { useState, useEffect, useContext } from "react";
import React from "react";

import { AccountContext } from "../../../context/AccountProvider";

//components
import Conversation from "./Conversation";
import { getUsers } from "../../../service/api";

const Conversations = ({ text }) => {
	const [users, setUsers] = useState([]);

	const { account, socket, setActiveUsers } = useContext(AccountContext);

	useEffect(() => {
		const fetchData = async () => {
			let data = await getUsers();
			let fiteredData = data.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
			setUsers(fiteredData);
		};
		fetchData();
	}, [text]);

	useEffect(() => {
		socket.current.emit("addUser", account);
		socket.current.on("getUsers", (users) => {
			setActiveUsers(users);
		});
	}, [account]);

	return (
		<div className="conversationBox">
			{users &&
				users.map(
					(user, index) =>
						user.sub !== account.sub && (
							<>
								<Conversation user={user} />
								{users.length !== index + 1 && <div className="styledDivider" />}
							</>
						)
				)}
		</div>
	);
};

export default Conversations;
