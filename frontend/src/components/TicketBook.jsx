import React from 'react';
import SeatBooking from './SeatBooking';

export default function TicketBook() {
    return (
        <>
            <button type="button" class="btn btn-info m-5" data-bs-toggle="modal" data-bs-target="#modal">
                Launch demo modal
            </button>

            <div class="modal fade" id="modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">How Many Seats?</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <h5></h5>

                        </div>
                    </div>
                </div>
            </div>


            <SeatBooking />
        </>
    )
}
