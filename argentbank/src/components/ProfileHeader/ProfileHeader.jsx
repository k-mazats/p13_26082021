import { useStore, useSelector } from 'react-redux';

const ProfileHeader = () => {
  const user = useSelector((state) => state.user);
	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				{user.firstName} {user.lastName}!
			</h1>
			<button className="edit-button">Edit Name</button>
		</div>
	);
};

export default ProfileHeader;
