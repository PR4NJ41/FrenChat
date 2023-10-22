import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";
import "./drawer.css";

const ImageContainer = styled(Box)`
	display: flex;
	justify-content: center;
`;

const Image = styled("img")({
	width: 200,
	height: 200,
	borderRadius: "50%",
	padding: "25px 0",
});

const Profile = () => {
	const { account } = useContext(AccountContext);

	return (
		<>
			<ImageContainer>
				<Image src={account.picture} alt="displaypicture" />
			</ImageContainer>
			<div className="profileName">
				<p>Name</p>
				<h2>{account.name}</h2>
			</div>
		</>
	);
};

export default Profile;
