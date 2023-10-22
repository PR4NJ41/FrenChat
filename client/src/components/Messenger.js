import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog.js";
import LoginDialog from "./login/login.js";

const Messenger = () => {
	const { account } = useContext(AccountContext);

	return <div>{account ? <ChatDialog /> : <LoginDialog />}</div>;
};

export default Messenger;
