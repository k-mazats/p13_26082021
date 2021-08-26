import { useEffect } from 'react';
import { useStore, useSelector } from 'react-redux';

import { setUser } from '../../features/user/user';
import { getUserAPI } from '../../features/user/userAPI';

import './Profile.css';

const Profile = () => {
	const store = useStore();
	const user = useSelector((state) => state.user);
	const token = useSelector((state) => state.isLogged.token);
	useEffect(() => {
		if (user.id === '') {
			(async () => {
				const response = await getUserAPI(token);
				if (response !== false) {
					store.dispatch(setUser(response.data.body));
				}
			})();
		}
	}, [store, user, token]);

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
				</h1>
				<button className="edit-button">Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
};

export default Profile;
