import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './common/components/Navbar/Navbar';
import Footer from './common/components/Footer/Footer';

import Home from './common/pages/Home/Home';
import Login from './common/pages/Login/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar></Navbar>{' '}
				<Switch>
					<Route exact path="/login" component={Login}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
			</Router>
			<Footer></Footer>
		</div>
	);
}

export default App;
