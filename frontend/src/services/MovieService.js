import axios from "axios";
import { MOVIE_BASE_URL } from "../constants/ApiConstants";

export function getMovies(type) {
    return axios.get(`${MOVIE_BASE_URL}${type}/type`);
}

export function getMovieById(id) {
    return axios.get(`${MOVIE_BASE_URL}${id}`);
}

export function getMoviesCast(id) {
    return axios.get(`${MOVIE_BASE_URL}${id}/cast`);
}

export function getMovieByTitle(title) {
    return axios.get(`${MOVIE_BASE_URL}search?title=${title}`)
}

export function getMoviesByFilter(type, status, rating, category) {
    return axios.get(`${MOVIE_BASE_URL}${type}/filter`, {
        params: { status, category, rating }
    });
}