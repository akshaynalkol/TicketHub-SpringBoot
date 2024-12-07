import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

// CSS
import './CardComp.css';
import { IMAGE_MIN_BASE_URL } from '../constants/ApiConstants';


export default function CardComp({ heading1, heading2, getMovies, path }) {
    const [data, setData] = useState([]);

    async function getData() {
        let res = await getMovies();
        // console.log(res.data);     

        setData(res.data.results);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2 className='fw-bold my-4'>{heading1}</h2>
            <div className='row gy-4 mb-5'>
                <div className='bg-dark border my-4'>
                    <h4 className='text-white px-sm-4 px-2 py-4 mb-0'>
                        {heading2}
                        <NavLink to={path} className='text-danger float-end'>Explore Now &gt;</NavLink>
                    </h4>
                </div>
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
