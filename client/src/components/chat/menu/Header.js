import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import "./menu.css";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/Drawer";

const Header = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const { account } = useContext(AccountContext);
	const toggleDrawer = () => {
		setOpenDrawer(true);
	};

	return (
		<>
			<div className="mainHeader">
				<img style={{ height: 40, width: 40, borderRadius: "50%" }} src={account.picture} onClick={() => toggleDrawer()} />
				<div className="headerwrap">
					<HeaderMenu />
				</div>
			</div>
			<InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
		</>
	);
};

export default Header;
