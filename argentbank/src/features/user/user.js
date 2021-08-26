import produce from 'immer';

const user = {
	createdAt: '',
	email: '',
	firstName: '',
	id: '',
	lastName: '',
	updatedAt: '',
};

export const setUser = (user) => ({
	type: 'setUser',
	payload: user,
});

export const resetUser = (user) => ({
	type: 'resetUser',
	payload: user,
});

export const userReducer = (state = user, action) => {
	if (action.type === 'setUser') {
		return produce(state, (draft) => {
			draft.createdAt = action.payload.createdAt;
			draft.email = action.payload.email;
			draft.firstName = action.payload.firstName;
			draft.id = action.payload.id;
			draft.lastName = action.payload.lastName;
			draft.updatedAt = action.payload.updatedAt;
		});
	}
	if (action.type === 'resetUser') {
		return produce(state, (draft) => {
			draft.createdAt = '';
			draft.email = '';
			draft.firstName = '';
			draft.id = '';
			draft.lastName = '';
			draft.updatedAt = '';
		});
	}
	return state;
	// ...
};
