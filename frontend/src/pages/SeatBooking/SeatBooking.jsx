import React, { useEffect, useState } from "react";
import './SeatBooking.css';
import TermsAndConditionsModel from "../../components/TermsAndConditionsModel";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function SeatBooking() {
    const { showTimeId } = useParams();
    const [bookingId, setBookingId] = useState();
    const navigate = useNavigate();
    const rows = 8;
    const cols = 14;
    const rowLabels = "ABCDEFGH";

    const [seats, setSeats] = useState(
        new Array(rows).fill().map(() => new Array(cols).fill("available"))
    );

    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        if (!JSON.parse(sessionStorage.getItem('user_details'))) {
            navigate('/');
            setTimeout(() => {
                toast.error('Login first to book tickets!');
            }, 100);
        }
    }, [navigate]);

    const handleSeatClick = (row, col) => {
        if (seats[row][col] === "available") {
            const newSeats = [...seats];
            newSeats[row][col] = "selected";
            setSeats(newSeats);
            setSelectedSeats([...selectedSeats, `${rowLabels[row]}${col + 1}`]);
        } else if (seats[row][col] === "selected") {
            const newSeats = [...seats];
            newSeats[row][col] = "available";
            setSeats(newSeats);
            setSelectedSeats(selectedSeats.filter(seat => seat !== `${rowLabels[row]}${col + 1}`));
        }
    };

    const confirmBooking = async () => {
        if (selectedSeats.length === 0) {
            toast.warning("No seats selected!");
            return;
        }
        // console.log(selectedSeats);

        const bookingDetails = {
            bookingDate: new Date(),
            noOfSeat: selectedSeats.length,
            showtime: +showTimeId,
            user: JSON.parse(sessionStorage.getItem('user_details')).id,
            seatNumbers: selectedSeats // Send seat numbers as an array
        };
        // console.log(bookingDetails);


        try {
            const response = await axios.post('http://localhost:8080/bookings/create', bookingDetails);

            // toast.success("Booking confirmed successfully!");
            // console.log('Booking successful:', response.data);
            setBookingId(response.data);

            // Mark seats as booked
            const newSeats = [...seats];
            selectedSeats.forEach(seat => {
                const row = rowLabels.indexOf(seat[0]);
                const col = parseInt(seat.slice(1), 10) - 1;
                newSeats[row][col] = "booked";
            });

            setSeats(newSeats);
            setSelectedSeats([]);
        } catch (error) {
            console.error('Error during booking:', error);
            toast.error("Error during booking, please try again.");
        }
    };

    return (
        <>
            <div className="container">
                <h2 className="text-center fw-bold my-5">Seat Booking System</h2>
                <div className="row justify-content-center">
                    <div className="col-7 bg-dark text-white text-center p-1 mb-3"
                        style={{ borderBottomLeftRadius: '150px', borderBottomRightRadius: '150px' }}>
                        Screen
                    </div>
                    <div className="col-10">
                        {seats.map((row, rowIndex) => (
                            <div key={rowIndex} className="row justify-content-center">
                                {row.map((seat, colIndex) => (
                                    <button
                                        key={colIndex}
                                        className={`p-0 border-0 seat rounded ${seat === "available"
                                            ? "bg-success"
                                            : seat === "selected"
                                                ? "bg-warning"
                                                : "bg-danger"
                                            }`}
                                        onClick={() =>
                                            seat !== "booked" && handleSeatClick(rowIndex, colIndex)
                                        }
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                            margin: "2px",
                                            cursor: seat !== "booked" ? "pointer" : "not-allowed",
                                        }}
                                    >
                                        {rowLabels[rowIndex]}{colIndex + 1}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center my-3">
                    <button className="btn btn-success p-3 me-2" disabled></button>Available&nbsp;&nbsp;
                    <button className="btn btn-warning p-3 me-2" disabled></button>Selected&nbsp;&nbsp;
                    <button className="btn btn-danger p-3 me-2" disabled></button>Booked
                </div>
                <div className="text-center my-4">
                    <button className="btn btn-danger px-5 mt-2" data-bs-toggle="modal"
                        data-bs-target="#terms-condition" onClick={confirmBooking} disabled={selectedSeats.length === 0}>
                        Confirm Booking
                    </button>
                </div>
            </div>
            <TermsAndConditionsModel bookingId={bookingId} />  
        </>
    );
};
