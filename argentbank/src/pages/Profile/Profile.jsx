import { useEffect } from 'react';
import { useStore, useSelector } from 'react-redux';

import { setUser, resetUser } from '../../features/user/user';

import { getUserAPI } from '../../features/user/userAPI';
import { setLogged } from '../../features/isLogged/isLogged';

import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileAccount from '../../components/ProfileAccount/ProfileAccount';

import './Profile.css';

const Profile = () => {
	const store = useStore();
	const user = useSelector((state) => state.user);
	const token =
		useSelector((state) => state.isLogged.token) ||
		JSON.parse(localStorage.getItem('isLogged')).token;
	const accounts = [
		{ title: 'Argent Bank Checking (x8349)', ammount: 2082.79 },
		{ title: 'Argent Bank Saving (x6712)', ammount: 10928.42 },
		{ title: 'Argent Bank Credit Card (x8349)', ammount: 184.3 },
	];
	useEffect(() => {
		if (user.id === '' || token) {
			(async () => {
				const response = await getUserAPI(token);
				if (response !== false) {
					store.dispatch(setUser(response.data.body));
				} else {
					const isLogged = { loginStatus: false, token: '' };
					store.dispatch(setLogged(isLogged));
					store.dispatch(resetUser());
					localStorage.removeItem('isLogged');
				}
			})();
		}
	}, [store, user, token]);

	return (
		<main className="main bg-dark">
			<ProfileHeader></ProfileHeader>
			<h2 className="sr-only">Accounts</h2>
			{accounts.map((account, index) => (
				<ProfileAccount
					title={account.title}
					ammount={account.ammount}
					key={`account-${index}`}
				></ProfileAccount>
			))}
		</main>
	);
};

export default Profile;
