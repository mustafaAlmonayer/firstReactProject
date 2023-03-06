import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://localhost:8080"
})

export function retriveHelloWorldBean() {
    return apiClient.get("/hello-world-bean");
}

export function retriveHelloWorldBeanPathVariable(username) {
    return apiClient.get(`/hello-world/path-variable/${username}`);
} 