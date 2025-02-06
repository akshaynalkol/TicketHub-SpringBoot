import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { IMAGE_MIN_BASE_URL } from '../constants/ApiConstants';
import { getMoviesByFilter } from '../services/MovieService';

// CSS
import './CardComp.css';


export default function CardComp({ filters }) {
    const [type, setType] = useState("Popular");
    const [data, setData] = useState([]);

    async function getData() {
        let res = await getMoviesByFilter(type, filters.status, filters.rating || 0, filters.category);
        // console.log(res);     

        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, [type, filters]);

    return (
        <>
            <h2 className='fw-bold my-4'>Movies</h2>
            <div className='mb-4'>
                <button className='btn btn-danger rounded-pill px-3 me-2'
                    onClick={() => setType("Popular")} disabled={type === "Popular"}>
                    Popular
                </button>
                <button className='btn btn-danger rounded-pill px-3 me-2'
                    onClick={() => setType("Trending")} disabled={type === "Trending"}>
                    Trending
                </button>
                <button className='btn btn-danger rounded-pill px-3 me-2'
                    onClick={() => setType("Upcoming")} disabled={type === "Upcoming"}>
                    Upcoming
                </button>
                <button className='btn btn-danger rounded-pill px-3 me-2'
                    onClick={() => setType("NowPlaying")} disabled={type === "NowPlaying"}>
                    Now Playing
                </button>
            </div>
            <div className='row align-items-start gy-4 mb-5'>
                {
                    data.map((val, index) => {
                        return (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-6'>
                                <NavLink to={`/movie_details/${val.id}`} className="text-decoration-none">
                                    <div className='card border-0'>
                                        <img src={`${IMAGE_MIN_BASE_URL}${val.poster_path}`} className='card-img anim-scale w-100' />
                                        <div className='card-body p-0 pt-2'>
                                            <h5 className='card-title text-wrap'>{val.title}</h5>
                                            <p>
                                                {moment(val.release_date).format('MMM Do YYYY')}
                                                <span className='badge text-bg-dark float-end'>Ratng {Number(val.vote_average).toFixed(1)}</span>
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
