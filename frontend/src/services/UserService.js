import axios from "axios";
import { USER_BASE_URL } from "../constants/ApiConstants";

export function signInUser(user) {
    return axios.post(`${USER_BASE_URL}signin`, user);
}

export function signUpUser(user) {
    return axios.post(`${USER_BASE_URL}signup`, user);
}

export function verifyOTP(data){
    return axios.post(`${USER_BASE_URL}verifyOTP`,data);
}

export function updateUser(id, user) {
    return axios.put(`${USER_BASE_URL}updateUser/${id}`, user);
}

export function validateEmail(email) {
    return axios.get(`${USER_BASE_URL}validateEmail`, {
        params: { email },
    });
}

export function validatePhoneNo(phone) {    
    return axios.get(`${USER_BASE_URL}validatePhone`, {
        params: { phone },
    });    
}