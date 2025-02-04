import axios from "axios";
import { EVENTS_API_URL, MOVIE_BASE_URL, NOWPLAYING_API_URL, TRENDING_API_URL, UPCOMING_API_URL } from "../constants/ApiConstants";

// export function getTrendingMovies() {
//     return axios.get(TRENDING_API_URL);
// }

// export function getUpcomingMovies() {
//     return axios.get(UPCOMING_API_URL);   
// }

// export function getNowPlayingMovies() {
//     return axios.get(NOWPLAYING_API_URL);
// }

// export function getCustomEvents() {
//     return axios.get(EVENTS_API_URL);
// }

export function getMovies(type) {
    return axios.get(`${MOVIE_BASE_URL}${type}/type`);
}

export function getMovieById(id) {
    return axios.get(`${MOVIE_BASE_URL}${id}`);
}

export function getMoviesCast(id) {
    return axios.get(`${MOVIE_BASE_URL}${id}/cast`);
}