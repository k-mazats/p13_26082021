import { createStore, combineReducers } from 'redux';
import { isLoggedReducer } from '../features/isLogged/isLogged';
import { userReducer } from '../features/user/user';
const reduxDevtools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const reducer = combineReducers({
	isLogged: isLoggedReducer,
	user: userReducer
});
const store = createStore(reducer, reduxDevtools);

export { store };
