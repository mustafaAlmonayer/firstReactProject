import { apiClient } from './TodoApiClient';
export function execBasicAuth(token) {
	console.log(token);
	return apiClient.get('/basicauth', { headers: { Authorization: token } });
}

export function execJwtAuth(username, password) {
	return apiClient.post('/authenticate', { username: username, password: password });
}
