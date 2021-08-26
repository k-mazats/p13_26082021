import produce from 'immer';

const isLogged = {
	loginStatus: false,
	token: '',
};

export const setLogged = (logged) => ({
	type: 'setLogged',
	payload: logged,
});
export const resetLogged = () => ({
	type: 'resetLogged'
});

export const isLoggedReducer = (state = isLogged, action) => {
	if (action.type === 'setLogged') {
		return produce(state, (draft) => {
			draft.loginStatus = action.payload.loginStatus;
			draft.token = action.payload.token;
		});
	}
	if (action.type === 'resetLogged') {
		return produce(state, (draft) => {
			draft.loginStatus = isLogged.loginStatus;
			draft.token = isLogged.token;
		});
	}
	return state;
	// ...
};
