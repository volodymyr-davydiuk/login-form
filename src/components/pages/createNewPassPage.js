import React from 'react';
import Layout from '../../shared/Layout';
import ResetPassForm from '../Auth/forms/ResetPassForm';

const CreateNewPassPage = () => {
	return (
		<Layout>
			<div className="wrapper">
				<h1 className={ "a-center" }>Qencode</h1>
				<h2 className={ "a-center" }>Create new Password?</h2>
				<ResetPassForm/>
			</div>
		</Layout>
	);
};

export default CreateNewPassPage;