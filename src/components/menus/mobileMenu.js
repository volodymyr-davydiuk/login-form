import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpenMenu, setIsOpenMenu }) => {
	const menuList = [
		{
			name: "Home",
			link: "/"
		},
		{
			name: "Login",
			link: "/login/"
		},
		{
			name: "Forgot password",
			link: "/forgot-pass/"
		},
		{
			name: "Create new password",
			link: "/create-new-pass/"
		}
	];

	return (
		<nav>
			<ul className={ "menu-list" }>
				{
					menuList.map( ( menuItem, index ) => {
						return (
							<li key={ `menu-item-${ index }` } className={ "menu-item" }>
								<Link to={ menuItem.link } onClick={() => setIsOpenMenu(!isOpenMenu)}>
									{ menuItem.name }
								</Link>
							</li>
						)
					} )
				}
			</ul>
		</nav>
	);
};

export default MobileMenu;