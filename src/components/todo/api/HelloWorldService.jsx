import axios from "axios";


export function retriveHelloWorldBean(token) {
    return apiClient.get("/hello-world-bean", {
        headers: {
            Authorization: token
        }
    });
}

export function retriveHelloWorldBeanPathVariable(username, token) {
    return apiClient.get(`/hello-world/path-variable/${username}`, {
        headers: {
            Authorization: token
        }
    });
} 

export function execBasicAuth(token) {
    console.log(token)
    return apiClient.get("/basicauth", {
        headers: {
            Authorization: token
        }
    });
};