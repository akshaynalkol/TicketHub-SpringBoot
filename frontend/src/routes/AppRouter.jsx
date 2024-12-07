import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Events from "../pages/Events/Events";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import SeatBooking from "../pages/SeatBooking/SeatBooking";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import ReturnPolicy from "../pages/ReturnPolicy/ReturnPolicy";
import UserProfilePage from "../pages/Dashboard/UserProfilePage";
import EventsUpcoming from "../pages/EventsUpoming/EventsUpcoming";
import MoviesUpcoming from "../pages/MoviesUpcoming/MoviesUpcoming";
import TermsAndConditions from "../pages/TermsAndCondition/TermsAndCondition";

import Payment from "../pages/Payment/Payment";


export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies-upcoming" element={<MoviesUpcoming />} />
                <Route path="events" element={<Events />} />
                <Route path="events-upcoming" element={<EventsUpcoming />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path='dashboard' element={<UserProfilePage />} />
                <Route path='movie_details/:id' element={<MovieDetails />} />
                <Route path='seat_booking' element={<SeatBooking />} />
                <Route path='terms-condition' element={<TermsAndConditions />} />
                <Route path='return-policy' element={<ReturnPolicy />} />
                <Route path='payment' element={<Payment />} />
            </Route>
        </Routes>
    )
}