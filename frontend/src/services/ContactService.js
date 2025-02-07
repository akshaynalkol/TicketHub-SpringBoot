import axios from "axios";
import { CONTACT_BASE_URL } from "../constants/ApiConstants";

export function sendMessage(data) {
    return axios.post(`${CONTACT_BASE_URL}send`,data);
}