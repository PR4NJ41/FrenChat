import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = ({ setText }) => {
	return (
		<div className="mainSearch">
			<div className="searchBox">
				<div className="icn">
					<SearchIcon fontSize="small" />
				</div>
				<input className="inputSearchField" placeholder="Search your chats" inputProps={{ "aria-label": "search" }} onChange={(e) => setText(e.target.value)} />
			</div>
		</div>
	);
};

export default Search;
