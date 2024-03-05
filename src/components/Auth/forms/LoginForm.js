import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


const LoginForm = () => {
	// const { setUsername } = useContext(StoreContext);
	const {register, handleSubmit, formState: {errors, }} = useForm({mode: "onChange"});
	const [errorMsg, setErrorMsg] = useState('');

	// const clientId = "997708932407-uki24e80m32vv3a0r9jkb95ia42nv2ro.apps.googleusercontent.com";

	const hideServerError = () => {
		setErrorMsg('');
	}

	//this must go to API calls somehow
	const onSubmit = async (values) => {
		const body = JSON.stringify(values);
		const response = await fetch("https://auth-qa.qencode.com/v1/auth/login", {
			"method": "POST",
			"body": body,
			"headers": {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			let json = await response.json();
			console.log(json)
		} else {
			let json = await response.json();
			setErrorMsg( 'Sorry, the username and/or password is incorrect.');
			console.log(
				'Login HTTP Error: ' + response.status + '. Error: ' + json.detail
			);
		}
	}

	return (
		<div className={ "login-form" }>

			<div className="signInDiv"></div>

			<form onSubmit={ handleSubmit( onSubmit ) }>
				{/*<GoogleOAuthProvider clientId={"997708932407-uki24e80m32vv3a0r9jkb95ia42nv2ro.apps.googleusercontent.com"}>*/}
				{/*	<GoogleLogin*/}
				{/*		login_uri={"https://auth-qa.qencode.com/v1/auth-api-references#tag/auth/operation/access_token_v1_auth_access_token_post"}*/}
				{/*		onSuccess={credentialResponse => {*/}
				{/*			console.log(credentialResponse);*/}
				{/*		}}*/}
				{/*		onError={() => {*/}
				{/*			console.log('Login Failed');*/}
				{/*		}}*/}
				{/*		useOneTap*/}
				{/*	/>*/}
				{/*</GoogleOAuthProvider>*/}
				{ errorMsg && <p className="error-msg">{ errorMsg }</p> }
				<div className="field-wrap icon-field">
					{ errors.email &&
						<p className="error">
							{ errors.email?.message }
						</p>
					}
					<input type="email" placeholder="Work email" id="email" onClick={ hideServerError }
								 { ...register( "email", {
									 required: {
										 value: true,
										 message: "This field is required!"
									 },
									 minLength: {
										 value: 15,
										 message: "Enter a minimum of 15 characters."
									 },
									 pattern: {
										 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										 message: "Invalid email address"
									 }
								 } ) }/>
				</div>

				<div className="field-wrap icon-field">
					{ errors.password &&
						<p className="error">
							{ errors.password?.message }
						</p>
					}
					<input type="password" placeholder="Password" id="password" onClick={ hideServerError }
								 { ...register( "password", {
									 required: {
										 value: true,
										 message: "This field is required!"
									 },
								 } ) }/>
				</div>
				<div>
					<Link to={"/forgot-pass/"}>Forgot your password?</Link>
				</div>
				<div className="form-buttons">
					<button
						aria-label="Log in"
						// disabled={ !isValid }
						type="submit"
					>
						Log in to your account
					</button>
					<div>
						<span>Is your company new to Qencode? <Link to={ "/login/" }>Sign up</Link></span>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;