import { apiClient } from './TodoApiClient';

export function getTodosForUser(username) {
	return apiClient.get(`/username/${username}/todos`, {
        headers: {
            Authorization: "Basic bXVzdGFmYTpkdW1teQ=="
        }
    });
}

export function getTodo(username,id) {
	return apiClient.get(`/username/${username}/todos/${id}`);
}

export function deleteTodo(username, id) {
	return apiClient.delete(`/username/${username}/todos/${id}`);
}

export function updateTodo(username, id, todo) {
	return apiClient.put(`username/${username}/todos/${id}`, todo);
}

export function createTodo(username, todo) {
	return apiClient.post(`username/${username}/todos`, todo);
}
