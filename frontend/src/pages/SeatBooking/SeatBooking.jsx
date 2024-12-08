import React, { useEffect, useState } from "react";
import './SeatBooking.css';
import TermsAndConditionsModel from "../../components/TermsAndConditionsModel";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SeatBooking() {
    const navigate = useNavigate();
    const rows = 8;
    const cols = 14;

    // console.log(new Array(rows)   
    //     .fill()
    //     .map(() => new Array(cols).fill("available")));
    const [seats, setSeats] = useState(
        new Array(rows)
            .fill()
            .map(() => new Array(cols).fill("available"))
    );

    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (row, col) => {
        if (seats[row][col] === "available") {
            const newSeats = [...seats];
            newSeats[row][col] = "selected";
            setSeats(newSeats);
            setSelectedSeats([...selectedSeats, `${row}${col}`]);
        } else if (seats[row][col] === "selected") {
            const newSeats = [...seats];
            newSeats[row][col] = "available";
            setSeats(newSeats);
            setSelectedSeats(
                selectedSeats.filter((seat) => seat !== `${row}${col}`)
            );
        }
    };

    const confirmBooking = () => {
        const newSeats = [...seats];
        selectedSeats.forEach((seat) => {
            const [row, col] = seat.split("").map(Number);
            newSeats[row][col] = "booked";
        });
        setSeats(newSeats);
        setSelectedSeats([]);
        alert("Booking Confirmed!");
    };

    useEffect(() => {
        if (!JSON.parse(sessionStorage.getItem('user_details'))) {
            navigate('/');
            setTimeout(() => {
                toast.error('Login first to book tickets!!');  
            }, 100);
        }
    }, []);

    return (
        <>
            <div className="container">
                <h2 className="text-center fw-bold my-4">Seat Booking System</h2>
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
                                    >{colIndex + 1}</button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center my-3">
                    <button className="btn btn-success p-3 me-2" disabled></button>Available&nbsp;&nbsp;
                    <button className="btn btn-warning p-3 me-2" disabled></button>Selected&nbsp;&nbsp;
                    <button className="btn btn-danger p-3 me-2" disabled>  </button>Booked
                </div>
                <div className="text-center my-4">
                    <button className="btn btn-danger px-5 mt-2" data-bs-toggle="modal"
                        data-bs-target="#terms-condition" onClick={confirmBooking} disabled={selectedSeats.length === 0}>
                        Confirm Booking
                    </button>
                </div>
            </div>
            <TermsAndConditionsModel />
        </>
    );
};
