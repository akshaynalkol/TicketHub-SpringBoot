import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Route, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/RouteConstants";

const Showtime = () => {
    const { id } = useParams();
    const [showtimes, setShowtimes] = useState([]);

    const formatTime = (timeString) => {
        const [hours, minutes, seconds] = timeString.split(":");
        const date = new Date();
        date.setHours(hours, minutes, seconds); 
    
        return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/showtimes/movie/${id}`)
            .then(response => setShowtimes(response.data))
            .catch(error => console.error("Error fetching showtimes:", error));
    }, [id]);

    return (
        <div className="container py-5">
            <h2 className="fw-bold text-center pb-5">Showtimes for Movie : {showtimes[0]?.movie?.title}</h2>
            <table className="table table-hovered table-stripped text-center">
                {/* <thead>
                    <tr>
                        <th>Theater</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                    </tr>
                </thead> */}
                <tbody>
                    {showtimes.map(show => (
                        <tr key={show.id}>
                            <td>{show.theater.name}</td>
                            <td>{show.date}</td>
                            <td>₹{show.amount}</td>
                            <td>
                                <NavLink to={`${ROUTES.SEAT_BOOKING}/${show.id}`} className="btn btn-danger px-4">
                                    {formatTime(show.time)}
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Showtime;