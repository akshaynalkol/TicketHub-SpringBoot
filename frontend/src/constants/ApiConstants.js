// Movies
export const API_KEY = '4d00e354677d7037dca04151cd23a174';

export const TRENDING_API_URL=`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`;
export const UPCOMING_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const NOWPLAYING_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const EVENTS_API_URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`;

export const IMAGE_MIN_BASE_URL = 'https://image.tmdb.org/t/p/w200';
export const IMAGE_MAX_BASE_URL ='https://image.tmdb.org/t/p/original';


// User
export const USER_BASE_URL='http://localhost:8080/user/'
export const MOVIE_BASE_URL='http://localhost:8080/movie/'
export const TICKET_BASE_URL='http://localhost:8080/tickets/'
export const CONTACT_BASE_URL='http://localhost:8080/contact/'



const Google_API_KEY = 'AIzaSyAGr445Tqocn-DGDqs0-2ZvF-IWhUaK9TQ';   
export const YOUTUBE_SEARCH_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_VIDEO_API =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&regionCode=IN&key=${Google_API_KEY}&q=`;