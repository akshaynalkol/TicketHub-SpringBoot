import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Events from "../pages/Events/Events";
import Main from "../pages/Main";
import UserProfilePage from "./UserProfilePage";


export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="movie" element={<Movies />} />
                <Route path="event" element={<Events />} />
                <Route path='dashboard' element={<UserProfilePage />} />
            </Route>
        </Routes>
    )
}