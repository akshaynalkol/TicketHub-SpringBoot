import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TicketPDF from './TicketPDF';

export default function Ticket() {
    const { bookingId } = useParams();
    const navigate = useNavigate();

    return (
        <div className="container text-center my-5">
            <h1 className="text-success">🎉 Thank You for Your Purchase! 🎉</h1>
            <h3 className="text-primary mt-3">Your Payment Was Successful ✅</h3>

            <button
                className="btn btn-primary mt-3"
                onClick={() => TicketPDF(bookingId)}
            >
                Download Ticket 🎫
            </button>

            <br />
            <button
                className="btn btn-secondary mt-3"
                onClick={() => navigate('/')}
            >
                Back to Home 🏠
            </button>
        </div>
    );
}
