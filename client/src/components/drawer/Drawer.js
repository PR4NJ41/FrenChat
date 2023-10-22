import { styled, Drawer, Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Header = styled(Box)`
  background: rgb(33, 35, 66);;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;

const Component = styled(Box)`
	color: rgba(255, 255, 252, 1);
	background: rgb(42, 47, 77);
	height: 100%;
`;

const Text = styled(Typography)`
	font-size: 18px;
`;

const drawerStyle = {
	left: 0,
	top: 0,
	bottom: 0,
	height: "100%",
	width: "30%",
	boxShadow: "none",
};
const InfoDrawer = ({ open, setOpen, profile }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Drawer open={open} onClose={handleClose} PaperProps={{ sx: drawerStyle }} style={{ zIndex: 1500, height: "100%" }}>
			<Header>
				<ArrowBack onClick={() => setOpen(false)} />
				<Text>Profile</Text>
			</Header>
			<Component>{profile && <Profile />}</Component>
		</Drawer>
	);
};

export default InfoDrawer;
