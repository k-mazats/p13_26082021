import React, { useState } from 'react';

import loginFormAPI from './LoginFormAPI';
import './LoginForm.css';

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleRemember = (event) => {
		setRemember(!remember);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		const body = { email: username, password };
		const response = await loginFormAPI(body);
		const token = response.data.body.token;
		localStorage.setItem('token', token);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={handleUsernameChange}
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<div className="input-remember">
				<input
					type="checkbox"
					id="remember-me"
					onChange={handleRemember}
					checked={remember}
				/>
				<label htmlFor="remember-me">Remember me</label>
			</div>

			<button className="sign-in-button" onClick={handleSubmit}>
				Sign In
			</button>
		</form>
	);
};

export default LoginForm;
