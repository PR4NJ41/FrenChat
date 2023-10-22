import { React, useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./login.css";
import jwt_decode from "jwt-decode";
import { addUser } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";

const LoginDialog = () => {
	const { setAccount, showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

	const onLoginSuccess = async (res) => {
		let decoded = jwt_decode(res.credential);
		setAccount(decoded);
		setShowloginButton(false);
		setShowlogoutButton(true);
		await addUser(decoded);
	};
	const onLoginFailure = (res) => {
		console.log("Login Failed:", res);
	};

	return (
		<div className="main">
			<div className="loginBox">
				<h1 className="h1">FrenChat</h1>
				{showloginButton ? <GoogleLogin shape="pill" style="LoginBtn" buttonText="" onSuccess={onLoginSuccess} onError={onLoginFailure} /> : null}
			</div>
		</div>
	);
};

export default LoginDialog;
