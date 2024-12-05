import React, { useState } from "react";
import '../assets/css/SeatBooking.css';

export default function SeatBooking() {
    const rows = 10;
    const cols = 10;

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

    return (
        <div className="container">
            <h2 className="text-center fw-bold mt-4">Seat Booking System</h2>
            <div className="text-center my-3">
                <button className="btn btn-success me-2" disabled>
                    Available
                </button>
                <button className="btn btn-warning me-2" disabled>
                    Selected
                </button>
                <button className="btn btn-danger" disabled>
                    Booked
                </button>
            </div>
            <>
                {seats.map((row, rowIndex) => (
                    <div key={rowIndex} className="row justify-content-center">
                        {row.map((seat, colIndex) => (
                            <div
                                key={colIndex}
                                className={`col seat rounded ${seat === "available"
                                    ? "bg-success"
                                    : seat === "selected"
                                        ? "bg-warning"
                                        : "bg-danger"
                                    }`}
                                onClick={() =>
                                    seat !== "booked" && handleSeatClick(rowIndex, colIndex)
                                }
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    margin: "5px",
                                    cursor: seat !== "booked" ? "pointer" : "not-allowed",
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </>
            <div className="text-center my-4">
                <button className="btn btn-primary" onClick={confirmBooking} disabled={selectedSeats.length === 0}>
                    Confirm Booking
                </button>
            </div>
        </div>
    );
};