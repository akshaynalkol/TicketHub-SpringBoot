import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');  
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!name || !nameRegex.test(name)) {
            toast.error('Please enter a valid name with alphabets only!');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailRegex.test(email)) {
            toast.error('Please enter a valid email address!');
            return;
        }

        if (!phone) {
            toast.error('Phone number cannot be empty!');
            return;
        }

        if (!message) {
            toast.error('Message cannot be empty!');
            return;
        }

        toast.success('Your message has been submitted successfully!!');

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className="text-center my-5">
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contact Us</h1>
                <hr style={{ width: '25%', margin: 'auto' }} />
                <hr style={{ width: '25%', margin: 'auto' }} />
                <p style={{ fontSize: '1.1rem', color: '#555', marginTop: '15px' }}>
                    We're here to assist you with any questions related to TicketHub, an event ticketing platform.
                    <br></br> Fill out the form below and we will respond as soon as possible.
                </p>
            </div>

            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <img
                            src="images/contactus.jpeg"
                            className="img-fluid"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            alt="Contact Us Image"
                        />
                    </div>
                    <div className="col-md-6">
                        <img
                            src="images/tickethub.gif"
                            className="img-fluid"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            alt="TicketHub GIF"
                        />
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit} style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold' }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ borderRadius: '5px', fontSize: '1rem' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ borderRadius: '5px', fontSize: '1rem' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label" style={{ fontWeight: 'bold' }}>
                                    Phone no
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter phone no"
                                    value={phone}
                                    onChange={(e) =>setPhone(e.target.value)}
                                    style={{ borderRadius: '5px', fontSize: '1rem' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label" style={{ fontWeight: 'bold' }}>
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="4"
                                    placeholder="Enter your message here..."
                                    style={{ height: '100px', borderRadius: '5px', fontSize: '1rem' }}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="text-end mt-5">
                                <button type="submit" className="btn btn-dark" style={{ width: '100%', padding: '10px', fontSize: '1.2rem' }}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}