import { useSelector } from 'react-redux';
import { useState } from 'react';

import ProfileForm from '../ProfileForm/ProfileForm';

const ProfileHeader = () => {
	const user = useSelector((state) => state.user);
	const [visibleForm, setVisibleForm] = useState(false);
	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				{user.firstName} {user.lastName}!
			</h1>
			<button className="edit-button" onClick={() => setVisibleForm(true)}>
				Edit Name
			</button>
			<ProfileForm visibleForm={visibleForm} setVisibleForm={setVisibleForm}></ProfileForm>
		</div>
	);
};

export default ProfileHeader;
