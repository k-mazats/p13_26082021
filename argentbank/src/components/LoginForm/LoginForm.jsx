import { useState } from 'react';
import { useStore, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import loginFormAPI from '../../features/isLogged/LoginFormAPI';
import './LoginForm.css';

import { setLogged } from '../../features/isLogged/isLogged';

const LoginForm = () => {
	const store = useStore();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const isLogged = useSelector((state) => state.isLogged.loginStatus);
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleRemember = (event) => {
		setRemember(!remember);
	};
	const login = (token) => {
		remember && localStorage.setItem('isLogged', JSON.stringify({loginStatus: true, token}));
		const isLogged = { loginStatus: true, token };
		store.dispatch(setLogged(isLogged));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const body = { email: username, password };
		const response = await loginFormAPI(body);
		const token = response.data.body.token;
		login(token);
	};
	return (
		<>
			{isLogged ? (
				<Redirect to="/profile" />
			) : (
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
			)}
		</>
	);
};

export default LoginForm;
