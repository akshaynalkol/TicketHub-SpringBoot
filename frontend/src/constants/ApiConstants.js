export const API_KEY = '4d00e354677d7037dca04151cd23a174';

export const TRENDING_API_URL=`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`;
export const UPCOMING_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const NOWPLAYING_API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const EVENTS_API_URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`;

export const IMAGE_MIN_BASE_URL = 'https://image.tmdb.org/t/p/w200';
export const IMAGE_MAX_BASE_URL ='https://image.tmdb.org/t/p/original';