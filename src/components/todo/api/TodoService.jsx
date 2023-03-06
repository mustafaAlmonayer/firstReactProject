import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'http://localhost:8080'
});

export function getTodosForUser(username) {
	return apiClient.get(`/username/${username}/todos`);
}

export function deleteTodo(username, id) {
	return apiClient.delete(`/username/${username}/todos/${id}`);
}
