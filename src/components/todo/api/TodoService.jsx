import { apiClient } from './TodoApiClient';

export function getTodosForUser(username) {
	return apiClient.get(`/users/${username}/todos`, {
		headers: {
			Authorization: 'Basic bXVzdGFmYTpkdW1teQ=='
		}
	});
}

export function getTodo(username, id) {
	return apiClient.get(`/users/${username}/todos/${id}`);
}

export function deleteTodo(username, id) {
	return apiClient.delete(`/users/${username}/todos/${id}`);
}

export function updateTodo(username, id, todo) {
	return apiClient.put(`users/${username}/todos/${id}`, todo);
}

export function createTodo(username, todo) {
	return apiClient.post(`users/${username}/todos`, todo);
}
