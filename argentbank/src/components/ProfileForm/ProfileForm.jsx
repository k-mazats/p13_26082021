import { useState, useEffect } from 'react';
import { useStore, useSelector } from 'react-redux';

import { setUser } from '../../features/user/user';
import { editUserAPI } from '../../features/user/userAPI';

import './ProfileForm.css';

const ProfileForm = (props) => {
  const store = useStore()
	const user = useSelector((state) => state.user);
  const isLogged = useSelector((state) => state.isLogged);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};
	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
    const body = {firstName, lastName}
    const response = await editUserAPI(isLogged.token, body)
		store.dispatch(setUser(response.data.body))
    props.setVisibleForm(false);
	};
	useEffect(() => {
		user && (setFirstName(user.firstName) || setLastName(user.lastName));
	}, [user]);
	return (
		<>
			{props.visibleForm ? (
				<div className="profile-form__modal-wrapper">
					<div className="profile-form__modal">
						<i
							className="fa fa-times profile-form__close"
							onClick={() => props.setVisibleForm(false)}
						></i>
						<form onSubmit={handleSubmit}>
							<div className="input-wrapper">
								<label htmlFor="firstName">First name</label>
								<input
									type="text"
									id="firstName"
									value={firstName}
									onChange={handleFirstNameChange}
									placeholder={firstName}
								/>
							</div>
							<div className="input-wrapper">
								<label htmlFor="lastName">Last name</label>
								<input
									type="text"
									id="lastName"
									value={lastName}
									onChange={handleLastNameChange}
								/>
							</div>
							<input
								type="submit"
								className="profile-form__submit"
								value="Enregistrer"
							/>
						</form>
					</div>
				</div>
			) : null}
		</>
	);
};

export default ProfileForm;
