import React, { useState } from 'react';
import Beverages from './Beverages';
import TicketPDF from './TicketPDF';

export default function Payment() {
    const [total, setTotal] = useState(0);

    const updateTotal = (amount) => {
        setTotal(total + amount);
    };

    return (
        <>
            <div className='container py-5'>
                {/* <div>
                    <h5>Movie Name or Title (Based on User)</h5>
                    <p>Cinema Theater Name or Location</p>
                    <p>Show Date and Timing</p>
                </div> */}
                <div className="text-center mb-5">
                    <h4>Happy Watching & Eating!</h4>
                    <p>Movie Title | Date & Time of Show:</p>
                    <h4>Food & Beverage Booking</h4>
                    <p>Select your food items and enjoy the show!</p>
                </div>
                <div className="content">
                    <Beverages updateTotal={updateTotal} />
                </div>
                <div className="text-center col-lg-6 col-8 mx-auto border border-danger mt-5 p-3">
                    <h4>Booking Summary</h4>
                    <p>Total Amount to Pay: ₹{total}</p>
                    <button className="btn btn-danger ">Proceed</button>
                </div>

                <button onClick={() => TicketPDF("12345")}>Download Ticket</button>

            </div>
        </>
    )
}