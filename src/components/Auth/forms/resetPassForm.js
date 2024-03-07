import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { VisibleTextIcon } from '../../../shared/icons/icons';
import '../../../assets/styles/pages/resetPassPage.scss';

const ResetPassForm = () => {
	const {register, watch, handleSubmit, formState: {errors, }} = useForm({mode: "onChange"});
	const [errorMsg, setErrorMsg] = useState('');
	const [isVisiblePass, setIsVisiblePass] = useState(false);
	const [isVisibleConfirmPass, setIsVisibleConfirmPass] = useState(false);
	const [token, setToken] = useState('');
	const [secret, setSecret] = useState('');


	const hideServerError = () => {
		setErrorMsg('');
	}

	//this must go to API calls somehow
	const onSubmit = async (values) => {
		const body = JSON.stringify(values);
		const response = await fetch("https://auth-qa.qencode.com/v1/auth/password-set", {
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
			if ( json.detail === "Link expired" ) {
				setErrorMsg("Link expired");
			}
			else {
				setErrorMsg("Server error, try again.");
			}
			console.log( json );
			console.log(
				'Login HTTP Error: ' + response.status + '. Error: ' + json.detail
			);
		}
	}

	return (
		<div className={ "reset-form" }>
			<form onSubmit={ handleSubmit( onSubmit ) }>
				{ errorMsg && <p className="error-msg">{ errorMsg }</p> }
				<input type="text"
							 className={ "hidden" }
							 value={ token }
							 id="token"
							 { ...register( "token" ) }
				/>
				<input type="text"
							 className={ "hidden" }
							 value={ secret }
							 id="secret"
							 { ...register( "secret" ) }
				/>
				<div className="field-wrap icon-field pass-field-wrap">
					{ errors.password &&
						<p className="error">
							{ errors.password?.message }
						</p>
					}
					<input
						type={ isVisiblePass ? "text" : "password" }
						placeholder="Password"
						id="password"
						onClick={ hideServerError }
						{ ...register( "password", {
							required: {
								value: true,
								message: "This field is required!"
							},
							minLength: {
								value: 8,
								message: "Enter a minimum of 8 characters."
							},
							pattern: {
								value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
								message: "Should contain numerics, uppercase letters and lowercase letters"
							}
						} ) }
					/>
					<div onClick={ () => setIsVisiblePass( !isVisiblePass ) }>
						<VisibleTextIcon/>
					</div>
				</div>
				<div className="field-wrap icon-field pass-field-wrap">
					{ errors.confirm_password &&
						<p className="error">
							{ errors.confirm_password?.message }
						</p>
					}
					<input
						type={ isVisibleConfirmPass ? "text" : "password" }
						placeholder="Password"
						id="confirm_password"
						onClick={ hideServerError }
						{ ...register( "confirm_password", {
							required: {
								value: true,
								message: "This field is required!"
							},
							minLength: {
								value: 8,
								message: "Enter a minimum of 8 characters."
							},
							validate: ( val ) => {
								if ( watch( 'password' ) !== val ) {
									return "Your passwords do no match";
								}
							},
							pattern: {
								value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
								message: "Should contain numerics, uppercase letters and lowercase letters"
							}
						} ) }
					/>
					<div onClick={ () => setIsVisibleConfirmPass( !isVisibleConfirmPass ) }>
						<VisibleTextIcon/>
					</div>
				</div>
				<div className="form-buttons">
					<button
						className={ "reset-button" }
						aria-label="Reset password"
						// disabled={ !isValid }
						type="submit"
					>
						Reset Password
					</button>
				</div>
			</form>
		</div>
	);
};

export default ResetPassForm;