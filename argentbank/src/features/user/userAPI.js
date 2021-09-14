import axios from 'axios';

export const getUserAPI = async (token) => {
	try {
		const response = await axios({
			method: 'post',
			url: 'http://localhost:3001/api/v1/user/profile',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (err) {
		return false;
	}
};

export const editUserAPI = async (token, body) => {
	try {
		const response = await axios({
			method: 'put',
			url: 'http://localhost:3001/api/v1/user/profile',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: body,
		});
		return response;
	} catch (err) {
		return false;
	}
};
