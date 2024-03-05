import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../shared/Layout';

const NotFound = () => {
	return (
		<Layout className={"not-found"}>
			<div className="wrapper">
				<h1 className={"a-center"}>Page Not found!</h1>
				<div className={"a-center"}>
					<Link to={"/"}>Back to home</Link>
				</div>
			</div>
		</Layout>
	);
};

export default NotFound;