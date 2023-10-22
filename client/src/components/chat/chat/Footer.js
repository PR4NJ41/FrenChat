import { useEffect } from "react";
import { AttachFile, Mic } from "@mui/icons-material";
import { uploadFile } from "../../../service/api";

const Footer = ({ sendText, value, setValue, setFile, file, setImage }) => {
	useEffect(() => {
		const getImage = async () => {
			if (file) {
				const data = new FormData();
				data.append("name", file.name);
				data.append("file", file);

				const response = await uploadFile(data);
				setImage(response.data);
			}
		};
		getImage();
	}, [file]);

	const onFileChange = (e) => {
		setValue(e.target.files[0].name);
		setFile(e.target.files[0]);
	};

	return (
		<div className="footerMain">
			<AttachFile />
			<input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => onFileChange(e)} />
			<div className="footerSearch">
				<input className="inputField" placeholder="Type a message" inputProps={{ "aria-label": "search" }} onChange={(e) => setValue(e.target.value)} onKeyPress={(e) => sendText(e)} value={value} />
			</div>
			<Mic />
		</div>
	);
};

export default Footer;
