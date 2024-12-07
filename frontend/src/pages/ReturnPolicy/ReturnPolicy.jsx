import React from 'react';
import './ReturnPolicy.css'; 

const ReturnPolicy = () => {
  return (
    <div className="container">
      <header className="return-policy-header">
        <h1>Return & Refund Policy</h1>
      </header>

      <main className="return-policy-content">
        <p>
          Welcome to TicketHub! Please review our return and refund policies carefully before making any bookings.
        </p>

        <section>
          <h2>1. Eligibility for Cancellation</h2>
          <p>
          Tickets can be canceled up to 2 hours before the showtime.
          </p>
        </section>

        <section>
          <h2>2. Refund Process</h2>
          <p>
          The full amount of the ticket price will be refunded to the original payment method.
          </p>
        </section>

        <section>
          <h2>3. Technical Issues</h2>
          <p>
            For technical issues, such as payment errors or incorrect bookings, contact our support team within 24 hours. 
            Our team will investigate and assist you.
          </p>
        </section>

        <section>
          <h2>4. Contact Us</h2>
          <p>
            If you need further assistance, feel free to reach out:
          </p>
          <ul>
            <li>Email: support@TicketHub.com</li>
            <li>Phone: 1800-123-4567 (Toll-Free)</li>
          </ul>
        </section>
      </main>

      <footer className="return-policy-footer">
        <p>&copy; 2024 TicketHub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ReturnPolicy;
