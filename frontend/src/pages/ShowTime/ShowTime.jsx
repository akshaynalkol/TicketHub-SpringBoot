import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Route, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/RouteConstants";

const Showtime = () => {
    const { id } = useParams();
    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/showtimes/movie/${id}`)
            .then(response => setShowtimes(response.data))
            .catch(error => console.error("Error fetching showtimes:", error));
    }, [id]);

    return (
        <div className="container">
            <h2 className="fw-bold text-center py-5">Showtimes for Movie : {showtimes[0]?.movie?.title}</h2>
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
                                <NavLink to={`${ROUTES.SEAT_BOOKING}/${show.id}`} className="btn btn-danger px-4">{show.time}</NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Showtime;