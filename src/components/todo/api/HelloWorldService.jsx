import { apiClient } from './TodoApiClient';

export function retriveHelloWorldBean(token) {
	return apiClient.get('/hello-world-bean');
}

export function retriveHelloWorldBeanPathVariable(username, token) {
	return apiClient.get(`/hello-world/path-variable/${username}`);
}

export function execBasicAuth(token) {
	console.log(token);
	return apiClient.get('/basicauth', { headers: { Authorization: token } });
}
