import axios from "axios";
import { THEATEROWNER_BASE_URL } from "../constants/ApiConstants";

export function getAllTheaterOwner(){
    return axios.get(`${THEATEROWNER_BASE_URL}getAllUsers`);    
}

export function deleteTheaterOwner(id) {
    return axios.delete(`${THEATEROWNER_BASE_URL}deleteUser/${id}`);   
}

export function getTheaterOwnerById(id){
    return axios.get(`${THEATEROWNER_BASE_URL}${id}`);     
}