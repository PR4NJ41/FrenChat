import { useState, useContext } from "react";
import InfoDrawer from "../../drawer/Drawer";

const HeaderMenu = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	return <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />;
};

export default HeaderMenu;
