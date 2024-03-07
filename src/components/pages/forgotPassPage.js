import React from 'react';
import Layout from '../../shared/Layout';
import ForgotPassForm from '../Auth/forms/ForgotPassForm';
import '../../assets/styles/pages/forgotPassPage.scss';

const ForgotPassPage = () => {
	return (
		<Layout>
			<div className="wrapper">
				<h1 className={ "a-center" }>Qencode</h1>
				<h2 className={ "a-center" }>Forgot Password?</h2>
				<ForgotPassForm/>
			</div>
		</Layout>
	);
};

export default ForgotPassPage;