import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ProfileAccount from '../../components/ProfileAccount/ProfileAccount';

import './Profile.css';

const Profile = () => {
	const accounts = [
		{ title: 'Argent Bank Checking (x8349)', ammount: 2082.79 },
		{ title: 'Argent Bank Saving (x6712)', ammount: 10928.42 },
		{ title: 'Argent Bank Credit Card (x8349)', ammount: 184.3 },
	];

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
