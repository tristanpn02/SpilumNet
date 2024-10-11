import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPost = async (id?: number) => {
    const response = await axios.get(`${API_URL}/posts/` + (id ? id: ''));
    return response.data;
}

export const fetchUser = async (id?: number) => {
    const response = await axios.get(`${API_URL}/users/` + (id ? id : ''));
    return response.data;
}

export const fetchComment = async (id?: number) => {
    const response = await axios.get(`${API_URL}/comments/` + (id ? id : ''));
    return response.data;
}