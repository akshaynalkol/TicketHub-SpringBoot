import React, { useEffect, useState } from "react";
import Beverages from "./Beverages";
import RazorpayButton from "./RazorpayButton"; // Import RazorpayButton
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Payment() {
    const { bookingId } = useParams();
    const navigate = useNavigate();
    const [total, setTotal] = useState(150);
    // const [bookingId, setBookingId] = useState(bookingId); // Dummy booking ID, replace with actual one
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user_details');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const updateTotal = (amount) => {
        setTotal(total + amount);
    };

    const handlePayment = async () => {
        try {
            // Step 1: Call backend to create Razorpay Order
            const { data } = await axios.post("http://localhost:8080/api/payments/create", null, {
                params: {
                    bookingId: bookingId,
                    amount: total,
                },
            });

            if (!data) {
                alert("Failed to create payment order");
                return;
            }
            console.log(data);
            const order = data; // Convert string to JSON

            // Step 2: Razorpay Payment Options
            const options = {
                key: "rzp_test_VqjhtrIWr2XzSD", // Replace with your Razorpay test key
                amount: order.amount,
                currency: order.currency,
                name: "TicketHub",
                description: "Movie Ticket Payment",
                order_id: order.id, // Razorpay Order ID from backend
                handler: async function (response) {
                    toast.success("Payment Successful!!!");

                    // Step 3: Call API to update payment status
                    await axios.post("http://localhost:8080/api/payments/success", null, {
                        params: {
                            orderId: order.id,
                            transactionId: response.razorpay_payment_id,
                        },
                    });

                    // alert("Payment recorded successfully!");
                    // Navigate to Ticket Page after Payment Success
                    navigate("/ticket", { state: { bookingId: order.id } });

                },
                prefill: {
                    name: user?.name || "Guest",
                    email: user?.email || "guest@example.com",
                    contact: user?.phone || "9999999999",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error("Payment Error:", error);
            alert("Payment Failed!");
        }
    };

    useEffect(() => {
        if (!user) {
            navigate('/');
            setTimeout(() => {
                toast.error('Login first to book tickets!');
            }, 100);
        }
    }, [navigate, user]);

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Food & Beverage Booking</h2>
                <p>Select your food items and enjoy the show!</p>
            </div>
            <div className="content">
                <Beverages updateTotal={updateTotal} />
            </div>
            <div className="text-center col-lg-6 col-8 mx-auto border border-danger mt-5 p-3">
                <h4>Booking Summary</h4>
                <p>Total Amount to Pay: ₹{total}</p>
                <RazorpayButton handlePayment={handlePayment} /> {/* Using RazorpayButton */}
            </div>
        </div>
    );
}
