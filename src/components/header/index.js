import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li><Link to={"/login/"}>Login</Link></li>
					<li><Link to={"/forgot-pass/"}>Forgot password</Link></li>
					<li><Link to={"/create-new-pass/"}>Create new password</Link></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;