import React from 'react';
import Image from '../../assets/return_policy.jpeg'

const ReturnPolicy = () => {
  return (
    <div className="container">
      <div className='text-center mt-5'>
        <img src={Image} alt='Return Policy' className='' />
        <h3 className='text-danger text-center fw-bold my-4'>Return & Refund Policy</h3>
      </div>

      <main className="return-policy-content mb-5">
        <p>
          Welcome to TicketHub! Please review our return and refund policies carefully before making any bookings.
        </p>

        <section className='mb-3'>
          <p className='text-danger fw-bold mb-0'>1. Eligibility for Cancellation</p>
          <ul>
            <li>
              Movie tickets can be canceled up to 2 hours prior to the showtime. Cancellations after this period will not be allowed, and no refund will be issued.
            </li>
            <li>
              Partial refunds are not allowed for group tickets; all tickets in the booking must be canceled together.
            </li>
          </ul>
        </section>

        <section className='mb-3'>
          <p className='text-danger fw-bold mb-0'>2. Refund Process</p>
          <ul>
            <li>
              The base ticket price will be refunded to the original payment method used during booking.
            </li>
            <li>
              Any service fees, convenience charges, or third-party charges (if applicable) will not be refunded.
            </li>
          </ul>
        </section>

        <section className='mb-3'>
          <p className='text-danger fw-bold mb-0'>3. Technical Issues</p>
          <p className='mb-0'>
            For technical issues, such as payment errors or incorrect bookings, contact our support team within 24 hours.
            Our team will investigate and assist you.
          </p>
        </section>

        <section className='mb-3'>
          <p className='text-danger fw-bold mb-0'>4. Special Scenarios</p>
          <p className='mb-0'>
            If the movie screening is canceled by the theater or rescheduled, a full refund will be provided, including any applicable fees.
          </p>
        </section>

        <section className='mb-3'>
          <p className='text-danger fw-bold mb-0'>5. Contact Us</p>
          <p className='mb-0'>If you need further assistance, feel free to reach out:</p>
          <ul>
            <li>Email: support@TicketHub.com</li>
            <li>Phone: 1800-123-4567 (Toll-Free)</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ReturnPolicy;
