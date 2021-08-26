import { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { useStore, useSelector } from 'react-redux';

import { setUser } from './features/user/user';
import { getUserAPI } from './features/user/userAPI';

import { setLogged } from './features/isLogged/isLogged';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
	const store = useStore();
	const isLogged = useSelector((state) => state.isLogged.loginStatus);

	useEffect(() => {
		const localToken = localStorage.getItem('token');
		(async () => {
			if (localToken) {
				const response = await getUserAPI(localToken);
				if (response !== false) {
					store.dispatch(setUser(response.data.body));
					const logObject = { loginStatus: true, token: localToken };
					store.dispatch(setLogged(logObject));
				}
			}
		})();
	}, [store]);
	return (
		<div className="App">
			<Router>
				<Navbar></Navbar>{' '}
				<Switch>
					<Route exact path="/login" component={Login}></Route>

					{isLogged ? (
						<Route exact path="/profile">
							<Profile></Profile>
						</Route>
					) : null}

					<Route exact path="/" component={Home}></Route>
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</Router>
			<Footer></Footer>
		</div>
	);
}

export default App;

// fetch('http://localhost:3001/api/v1/user/profile', {
// 	headers: {
// 		accept: 'application/json, text/plain, */*',
// 		'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
// 		authorization: 'Bearer undefined',
// 		'cache-control': 'no-cache',
// 		pragma: 'no-cache',
// 		'sec-ch-ua':
// 			'"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
// 		'sec-ch-ua-mobile': '?0',
// 		'sec-fetch-dest': 'empty',
// 		'sec-fetch-mode': 'cors',
// 		'sec-fetch-site': 'same-site',
// 	},
// 	referrer: 'http://localhost:3000/',
// 	referrerPolicy: 'strict-origin-when-cross-origin',
// 	body: null,
// 	method: 'POST',
// 	mode: 'cors',
// 	credentials: 'include',
// });
