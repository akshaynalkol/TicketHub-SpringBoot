import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TicketPDF from './TicketPDF';

export default function Ticket() {
    const { bookingId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user_details');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (!user) {
            navigate('/');
            setTimeout(() => {
                toast.error('Login first to book tickets!');
            }, 100);
        }
    }, [navigate, user]);


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
