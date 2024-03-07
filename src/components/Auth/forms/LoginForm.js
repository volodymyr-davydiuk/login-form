import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { GitHubIcon, GoogleIcon, VisibleTextIcon } from '../../../shared/icons/icons';
import { useGoogleLogin } from '@react-oauth/google';


const LoginForm = () => {
	const {register, handleSubmit, formState: {errors, }} = useForm({mode: "onChange"});
	const [errorMsg, setErrorMsg] = useState('');
	const [isVisiblePass, setIsVisiblePass] = useState(false);

	// const clientId = "1004314386829-loftuelqhht1mvie5n7jnbd49um9f09k.apps.googleusercontent.com"; //Google client id
	const gitHubClientId = "90a067f6669b00321c18";

	const navigate = useNavigate()

	const loginToGithub = () => {
		localStorage.setItem("loginWith", "GitHub")
		window.location.assign(`https://github.com/login/oauth/authorize?client_id=${gitHubClientId}`)
	}

	const loginToGoogle = useGoogleLogin({
		onSuccess: tokenResponse => {
			localStorage.setItem("loginWith", "Google")
			localStorage.setItem("accessToken", tokenResponse.access_token)
			navigate("/")
		},
	})

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
			console.log("Response ok:" + json)
			//there will be auth function
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

			<div className="signInDiv"/>

			<form onSubmit={ handleSubmit( onSubmit ) }>
				<div className="social-login-group">
					<div className={ "social-button-wrap" }>
						<button
							className={ "social-button google-button" }
							onClick={() => loginToGoogle()}
						>
							<GoogleIcon/>
							Google
						</button>
					</div>
					<div className={ "social-button-wrap" }>
						<button
							className={ "social-button git-button" }
							onClick={() => loginToGithub()}
						>
							<GitHubIcon/>
							Github
						</button>
					</div>
				</div>

				<div className="divider">
					<span>OR</span>
				</div>

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

				<div className="field-wrap icon-field pass-field-wrap">
					{ errors.password &&
						<p className="error">
							{ errors.password?.message }
						</p>
					}
					<input
						type={isVisiblePass ? "text" : "password"}
						placeholder="Password"
						id="password"
						onClick={ hideServerError }
						 { ...register( "password", {
							 required: {
								 value: true,
								 message: "This field is required!"
							 },
						 } ) }
					/>
					<div onClick={() => setIsVisiblePass(!isVisiblePass)}>
						<VisibleTextIcon />
					</div>
				</div>
				<div className={"forgot-pass a-right"}>
					<Link to={"/forgot-pass/"}>Forgot your password?</Link>
				</div>
				<div className="form-buttons">
					<button
						className={"login-button"}
						aria-label="Log in"
						// disabled={ !isValid }
						type="submit"
					>
						Log in to your account
					</button>
					<div className={"register-block a-center"}>
						<span>
							Is your company new to Qencode? {' '}
							<Link className={"register-link"} to={ "/register/" }>Sign up</Link>
						</span>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;