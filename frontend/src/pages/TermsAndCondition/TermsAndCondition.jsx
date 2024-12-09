import React from "react";
import { toast } from "react-toastify";

const TermsAndConditions = () => {
  return (
    <div className="container">
      <h3 className="fw-bold text-danger text-center mt-5 mb-4">Terms & Conditions</h3>
      <div className="mb-4">
        <p className="fw-bold text-danger">
          1. Pre-booked Food & Beverages have to be collected by the patrons
          from the F&B counter by showing a valid booking ID.
        </p>
        <p className="fw-bold text-danger">2. For 3D movies, 3D glasses charges will be charged extra.</p>
        <p className="fw-bold text-danger">Below points are for Large Screen:</p>
        <ol>
          <li>
            3D Glasses Provided To You Are Unique, Expensive And Sanitized For
            Your Safety.
          </li>
          <li>
            These Glasses Are Specially Made For 3D Viewing Only On Our Big
            Screen, Not Suitable For Other Screens.
          </li>
          <li>
            Please Handle Glasses With Care, In Case Of Loss/Damage Cost Of
            Rs.2000/- Will Be Charged.
          </li>
          <li>
            Please Return The Glasses To Our Staff Before Exiting The
            Auditorium.
          </li>
          <li>Please Don't Leave The 3D Glasses At The Seats.</li>
          <li>
            3D Glasses Are Chargeable Over And Above The Ticket Price.
          </li>
          <li>For One Ticket, One 3D Glasses Will Be Distributed.</li>
          <li>Children above the age of 3 years and above require tickets.</li>
        </ol>

        <p className="fw-bold text-danger">Terms of Cancellation:</p>
        <ul>
          <li>
            Transaction can be cancelled only after 10 minutes of booking the
            ticket/F&B.
          </li>
          <li>
            No cancellation will be allowed within 20 minutes of movie start
            time.
          </li>
          <li>
            For tickets cancelled 2 hours before show start time, 75% of
            ticket value and 100% of F&B value will be refunded.
          </li>
          <li>
            For tickets cancelled from 20 minutes to 2 hours before the show
            starts time, 50% of ticket value and 100% of F&B value will be
            refunded.
          </li>
          <li>
            In the case of F&B booking (without a ticket) through any mode,
            there is no cancellation available.
          </li>
          <li>
            No refund will be given for booking done through M-coupons, Gift
            cards, Star Passes, Vouchers, Promos, corporate bookings, special
            screenings, or block bookings.
          </li>
          <li>
            Ticket cancellation cannot be applied/clubbed on a booking done
            through or an offer given by us or facilitated by the business
            partner.
          </li>
          <li>
            No partial cancellation is allowed. The patron must cancel the
            complete transaction.
          </li>
          <li>
            If booking is made using multiple payment modes, no partial
            cancellation is allowed.
          </li>
          <li>
            Convenience fee and applicable taxes will not be refunded in case
            of cancellation.
          </li>
          <li>
            Refunds for cancelled tickets will be processed within a minimum
            of 7 working days.
          </li>
          <li>
            PVR INOX Limited reserves the right to modify, add, alter, revise,
            withdraw, or otherwise carry out any necessary changes to these
            terms and conditions and/or the cancellation feature.
          </li>
          <li>
            Cancellation is not valid for tickets booked at the Box Office or
            certain listed properties.
          </li>
          <li>
            If INOX Reward Points are redeemed during a transaction, the
            customer cannot cancel the transaction.
          </li>
          <li>
            In case of any dispute, PVR INOX Limited's decision will be final.
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-between mb-5">
        <button className="btn btn-light border">Cancel</button>
        <button className="btn btn-danger"
          onClick={() => toast.success('You Have Successfully Accepted The Terms & Condition!!')}>
          Accept</button>        
      </div>
    </div>
  );
};

export default TermsAndConditions;

