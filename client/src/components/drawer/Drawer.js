import { styled, Drawer, Box, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Drawer = ({ open, setOpen, profile }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Drawer open={open} onClose={handleClose} PaperProps={{ sx: drawerStyle }} style={{ zIndex: 1500 }}>
			<Header>
				<ArrowBack onClick={() => setOpen(false)} />
				<Text>Profile</Text>
			</Header>
			<Component>{profile && <Profile />}</Component>
		</Drawer>
	);
};

export default Drawer;
