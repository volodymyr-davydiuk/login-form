import React, { useState } from 'react';
import DesktopMenu from '../menus/desktopMenu';
import { CloseMenuIcon, MenuIcon } from '../../shared/icons/icons';
import MobileMenu from '../menus/mobileMenu';

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	return (
		<header className={"app-header"}>
			<div className="desktop-menu">
				<DesktopMenu/>
			</div>
			<button
				className="menu-icon-wrap mobile-only"
				aria-label={"Menu icon"}
				onClick={() => setIsOpenMenu(!isOpenMenu)}
			>
				{
					isOpenMenu ? <CloseMenuIcon/> : <MenuIcon/>
				}
			</button>
			<div className={`mobile-menu ${isOpenMenu ? "menu-opened" : ''}`}>
				<MobileMenu/>
			</div>
		</header>
	);
};

export default Header;