import axios from "axios";
import { BOOKED_SEAT_BASE_URL } from "../constants/ApiConstants";

export function getBookedSeatByShowtime(id){
    return axios.get(`${BOOKED_SEAT_BASE_URL}showtime/${id}`);
}