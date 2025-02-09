import React from 'react'; 
import axios from 'axios';        

export default async function TicketPDF(bookingId) {
    try {
        const response = await axios.get(`http://localhost:8080/tickets/download/${bookingId}`, {
            responseType: "blob", // Important for PDF
        });

        const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `ticket_${bookingId}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Error downloading ticket:", error); 
    }
}
