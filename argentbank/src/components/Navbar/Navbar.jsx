import { Link } from 'react-router-dom';
import { useStore, useSelector } from 'react-redux';
import { setLogged } from '../../features/isLogged/isLogged';
import { resetUser } from '../../features/user/user'
import './Navbar.css';
const Navbar = () => {
	const store = useStore();
	const isLogged = useSelector((state) => state.isLogged.loginStatus);
	const logout = () => {
		const isLogged = { loginStatus: false, token: '' };
		store.dispatch(setLogged(isLogged));
		store.dispatch(resetUser())
		localStorage.removeItem('token')
	};
	return (
		<nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img
					className="main-nav-logo-image"
					src="./img/argentBankLogo.png"
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			{isLogged ? (
				<div>
					<Link className="main-nav-item" to="/profile">
						<i className="fa fa-user-circle"></i>
						Tony
					</Link>
					<Link className="main-nav-item" to="/" onClick={logout}>
						<i className="fa fa-sign-out"></i>
						Sign Out
					</Link>
				</div>
			) : (
				<div>
					<Link className="main-nav-item" to="/login">
						<i className="fa fa-user-circle"></i>
						Sign In
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
