import React from "react";

import Menu from "./Menu";

const Header = () => {
	return (
		<header>
			<div className="menu">
				<Menu />
			</div>

			<div className="app-title">Studio</div>

			<div className="search">search menu</div>
		</header>
	);
};

export default Header;
