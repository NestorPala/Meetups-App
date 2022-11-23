import axios from "axios";

export function setupApi() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    return axios.create({
        baseURL: "http://localhost:3000/Meetups-App"
    });
};