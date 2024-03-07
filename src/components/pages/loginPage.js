import React from 'react';
import Layout from '../../shared/Layout';
import LoginForm from '../Auth/forms/LoginForm';
import '../../assets/styles/pages/loginPage.scss';
import { GoogleOAuthProvider } from '@react-oauth/google';

const LoginPage = () => {
	const clientId = "1004314386829-loftuelqhht1mvie5n7jnbd49um9f09k.apps.googleusercontent.com"; //Google client id

	return (
		<Layout>
			<div className="wrapper">
				<h1 className={"a-center"}>Qencode</h1>
				<h2 className={"a-center"}>Log in to your account</h2>
				<GoogleOAuthProvider clientId={ clientId }>
					<LoginForm/>
				</GoogleOAuthProvider>
			</div>
		</Layout>
	);
};

export default LoginPage;