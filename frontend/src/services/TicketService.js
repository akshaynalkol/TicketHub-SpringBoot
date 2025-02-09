import { TICKET_BASE_URL } from "../constants/ApiConstants";

export function getTicket(bookingId) { 
    return axios.get(`${TICKET_BASE_URL}/download/${bookingId}`, {
        responseType: "blob", // Important for handling PDF
      });
}