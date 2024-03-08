import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './loginPage';

describe('Login page', () => {
	it('Renders Log in to your account text', () => {
		render(
			<BrowserRouter>
				<LoginPage/>
			</BrowserRouter>
		);
		const pageHeadingH1 = screen.getByRole('heading', {
			level: 1,
		});
		expect(pageHeadingH1).toBeInTheDocument();

		const pageHeadingH2 = screen.getByRole('heading', {
			level: 2,
		});
		expect(pageHeadingH2).toBeInTheDocument();

		const pageHeading = screen.getByRole('heading', {
			name: "Log in to your account"
		});
		expect(pageHeading).toBeInTheDocument();
	});
	it('Renders form correctly', () => {
		render(
			<BrowserRouter>
				<LoginPage/>
			</BrowserRouter>
		);
		const inputEmailElement = screen.getByRole('textbox', {
			text: "Work email"
		});
		expect(inputEmailElement).toBeInTheDocument();

		const inputPasswordElement = screen.getByRole('textbox', {
			text: "Password"
		});
		expect(inputPasswordElement).toBeInTheDocument();

		const buttonGoogleElement = screen.getByRole('button', {
			name: "Google"
		});
		expect(buttonGoogleElement).toBeInTheDocument();

		const buttonGitHubElement = screen.getByRole('button', {
			name: "Github"
		});
		expect(buttonGitHubElement).toBeInTheDocument();

		const buttonSendElement = screen.getByRole('button', {
			name: "Log in"
		});
		expect(buttonSendElement).toBeInTheDocument();
	});
})