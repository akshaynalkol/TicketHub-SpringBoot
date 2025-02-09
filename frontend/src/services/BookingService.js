import axios from "axios";
import { BOOKING_BASE_URL } from "../constants/ApiConstants";

export function getAllBookings(){ 
    return axios.get(`${BOOKING_BASE_URL}getAllUsers`);    
}

export function deleteBooking(id) {
    return axios.delete(`${BOOKING_BASE_URL}deleteUser/${id}`);      
}

export function getBookingById(id) {  
    return axios.get(`${BOOKING_BASE_URL}${id}`);      
}

export function getBookingByUser(id){ 
    return axios.get(`${BOOKING_BASE_URL}user/${id}`);
}