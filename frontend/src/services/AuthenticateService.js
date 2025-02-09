import axios from "axios";
import { AUTHENTICATE_BASE_URL } from "../constants/ApiConstants";

export function authenticateService(data){
    return axios.post(AUTHENTICATE_BASE_URL,data);
}