import axios from 'axios';

const loginFormAPI = async (body) => {
	const response = await axios({
		method: 'post',
		url: 'http://localhost:3001/api/v1/user/login',
		data: body,
	});
	return response;
};

export default loginFormAPI;
