import React from 'react';
import Layout from '../../shared/Layout';
import LoginForm from '../Auth/forms/LoginForm';
import '../../assets/styles/pages/loginPage.scss';

const LoginPage = () => {
	return (
		<Layout>
			<div className="wrapper">
				<h1 className={"a-center"}>Qencode</h1>
				<h2 className={"a-center"}>Log in to your account</h2>
				<LoginForm/>
			</div>
		</Layout>
	);
};

export default LoginPage;