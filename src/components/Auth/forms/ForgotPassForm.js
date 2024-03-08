import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ForgotPassForm = () => {
	const {register, handleSubmit, formState: {errors, }} = useForm({mode: "onChange"});
	const [errorMsg, setErrorMsg] = useState('');

	const navigate = useNavigate()

	//this must go to API calls somehow
	const onSubmit = async (values) => {
		const body = JSON.stringify(values);
		const response = await fetch("https://auth-qa.qencode.com/v1/auth/password-reset", {
			"method": "POST",
			"body": body,
			"headers": {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			let json = await response.json();
			console.log("Response ok:" + json)
			//there will be reset password function.
			navigate("/create-new-pass/");
		} else {
			let json = await response.json();
			setErrorMsg( 'Sorry, the username not found.');
			console.log(
				'Login HTTP Error: ' + response.status + '. Error: ' + json.detail
			);
		}
	}

	const hideServerError = () => {
		setErrorMsg('');
	}

	return (
		<div className={ "forgot-pass-form" }>
			<form onSubmit={ handleSubmit( onSubmit ) }>
				{ errorMsg && <p className="error-msg">{ errorMsg }</p> }
				<div className="field-wrap icon-field">
					{ errors.email &&
						<p className="error">
							{ errors.email?.message }
						</p>
					}
					<input type="email"
								 placeholder="Enter your email"
								 id="email"
								 onClick={ hideServerError }
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
								 } ) }
					/>
				</div>
				<div className="form-buttons">
					<button
						className={ "send-button" }
						aria-label="Submit"
						// disabled={ !isValid }
						type="submit"
					>
						Send
					</button>
					<div>
						<button
							className={"cancel-button"}
							aria-label="Cancel"
							onClick={() => navigate("/")}
						>
							Cancel
						</button>
					</div>
				</div>
			</form>

		</div>
	);
};

export default ForgotPassForm;