import React from 'react';
import Layout from '../../shared/Layout';
import LoginForm from '../Auth/forms/LoginForm';

const LoginPage = () => {
	return (
		<Layout>
			<div className="wrapper">
				<h1 className={"a-center"}>Qencode</h1>
				<LoginForm/>
			</div>
		</Layout>
	);
};

export default LoginPage;