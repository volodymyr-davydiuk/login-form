import React from 'react';
import Header from '../components/header';
import '../assets/styles/main.scss';

const Layout = ({ children }) => {
	return (
		<div className={"app-container"}>
			<Header/>
			<main role="main" className={"app-content-main"}>
				{ children }
			</main>
		</div>
	);
};

export default Layout;