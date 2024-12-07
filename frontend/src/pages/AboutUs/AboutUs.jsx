import React from 'react';
import TeamSection from './TeamSection';

const AboutUs = () => {
    return (
        <section className="about-us" id="about">
            <div className="container my-5">
                <div className="row gy-4">

                    <div className="col-md-6">
                        <img
                            src="/images/tickethub.gif"
                            alt="Theatre"
                            className="img-fluid rounded shadow mb-3"
                        />
                        <img
                            src="/images/theatre-photo.jpg"
                            alt="Entertainment"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    
                    <div className="col-md-6">
                        <h2><strong>TicketHUB :</strong><h3> Endless entertainment anytime anywhere </h3> </h2>
                        <hr></hr>
                        <p>
                            Welcome to <strong>TicketHUB</strong>, your ultimate destination for all ticketing needs.
                            <strong> Endless Entertainment, Anytime, Anywhere</strong> is not just our slogan—it's our promise.
                        </p>
                        <hr></hr>
                        <p>
                            At <strong>TicketHUB</strong>, we offer a seamless, hassle-free platform for booking tickets for a wide variety of events.
                            Whether you're in the mood for the latest <strong>blockbuster movie</strong>, an adrenaline-pumping <strong>sports match</strong>, or a soul-stirring <strong>concert</strong>, we are your one-stop solution.
                            With us, your journey to entertainment begins and ends in one place.
                        </p>
                        <hr></hr>
                        <p>
                            <strong>Our platform ensures: </strong>
                            <br></br>
                            <ul>
                                <li>Convenient and secure ticket booking experience.</li>
                                <li>Access to tickets for movies, outdoor events, sports, concerts, and more.</li>
                                <li>Fast, reliable, and user-friendly platform.</li>
                                <li>Instant confirmation and easy payments.</li>
                                <li>Exclusive deals and early access to major events.</li>
                            </ul>
                        </p>
                        <hr></hr>
                        <p>
                            At <strong>TicketHUB</strong>, we aim to unite people with their favorite events effortlessly.
                            From stadiums to theaters, from music concerts to cultural festivals, we provide you with the key to unlock unforgettable experiences.
                            It's not just about buying tickets—it's about creating memories.
                        </p>
                        <hr></hr>
                        <p>
                            <strong>TicketHUB</strong> stands for reliability, ease, and excitement. Join us and let’s bring the entertainment world closer to you.
                            <em>Because with us, it’s not just about booking tickets—it’s about unlocking endless entertainment.</em>
                        </p>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <TeamSection />
        </section>
    );
};

export default AboutUs;