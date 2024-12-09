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
import { ROUTES } from "../constants/RouteConstants";


export function AppRouter() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Main />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.MOVIES} element={<Movies />} />
                <Route path={ROUTES.UPCOMING_MOVIES} element={<MoviesUpcoming />} />
                <Route path={ROUTES.EVENTS} element={<Events />} />
                <Route path={ROUTES.UPCOMING_EVENTS} element={<EventsUpcoming />} />
                <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
                <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />
                <Route path={ROUTES.DASHBOARD} element={<UserProfilePage />} />
                <Route path={`${ROUTES.MOVIE_DETAILS}/:id`} element={<MovieDetails />} />
                <Route path={ROUTES.SEAT_BOOKING} element={<SeatBooking />} />
                <Route path={ROUTES.TERMS_CONDITION} element={<TermsAndConditions />} />
                <Route path={ROUTES.RETURN_POLICY} element={<ReturnPolicy />} />
                <Route path={ROUTES.PAYMENT} element={<Payment />} />
            </Route>
        </Routes>
    )
}