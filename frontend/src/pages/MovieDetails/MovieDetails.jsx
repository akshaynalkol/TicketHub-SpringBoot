import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MovieCastDetails from './MovieCastDetails';
import moment from 'moment';
import SimilarMovie from './SimilarMovie';
import { getMovieById } from '../../services/MovieService';

const MovieDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const res = await getMovieById(id);
        // console.log(res.data);

        setLoading(false);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, [id]);

    if (loading === true) {
        return <p className='text-center text-dark py-5'><span className='spinner-border'></span></p>
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='w-100'>
                    {
                        data.backdrop_path ?
                            <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="Movie Poster"
                                className='w-100 object-fit-cover' height={300} />
                            :
                            <div className='w-100' style={{ height: '180px' }}  ></div>
                    }
                </div>
                <div className='row align-items-start'>
                    <div className='col-2 p-5 pt-0'>
                        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="Movie Poster"
                            className='' style={{ marginTop: '-150px' }} />
                        <button className='btn btn-dark mb-1 mt-3' style={{ width: '200px' }}>Play Trailer</button>
                        <NavLink to={`/show_time/${id}`} className='btn btn-danger' style={{ width: '200px' }}>Book Ticket</NavLink>
                    </div>
                    <div className='col-xl-10 px-md-5 py-5 pt-0'>
                        <h2 className='fw-bold mb-0'>{data.title}</h2>
                        <p className='mb-2'>{data.tagline}</p>
                        <p className='border-top pt-2 mb-2'>
                            Rating: {Number(data.vote_average).toFixed(1)}+&nbsp;&nbsp;l&nbsp;
                            View: {Number(data.vote_count).toFixed(0)}&nbsp;&nbsp;l&nbsp;
                            Duration: {data.runtime} min
                        </p>
                        <h5 className='fw-bold border-top pt-2 mb-1'>Overview</h5>
                        <p className='mb-2' style={{ textAlign: 'justify' }}>{data.overview}</p>
                        <p className='border-top pt-2 mb-2'>
                            Status: {data.status}&nbsp;&nbsp;l&nbsp;
                            Released Date: {moment(data.release_date).format('MMM Do YYYY')}&nbsp;&nbsp;l&nbsp;
                            Revenue: {data.revenue}
                        </p>
                        <MovieCastDetails id={data.id} />
                    </div>
                </div>
                <SimilarMovie id={data.id} type={data.type} />
            </div >
        </>
    )
}

export default MovieDetails;