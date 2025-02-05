export function getMovies(type) {
    return axios.get(`${MOVIE_BASE_URL}${type}/type`);
}