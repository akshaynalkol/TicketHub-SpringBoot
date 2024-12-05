import React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { NOWPLAYING_API_URL } from '../constants/ApiConstants';

// CSS
import '../pages/Home/Home.css';


export default function Movie() {
    const [data, setData] = useState([]);

    async function getData() {
        let res = await axios.get(NOWPLAYING_API_URL);
        // console.log(res.data);     

        setData(res.data.results);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2 className='fw-bold my-4'>Movies</h2>
            <div className='row gy-4 mb-5'>
                <div className='bg-dark border my-4'>
                    <h3 className='text-white p-4 mb-0'>
                        Upcoming
                        <span className='float-end'>Explore Now &gt;</span>
                    </h3>
                </div>
                {
                    data.map((val, index) => {
                        return (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-6'>
                                <div className='card border-0'>
                                    <img src={`https://image.tmdb.org/t/p/w200${val.poster_path}`} className='card-img anim-scale w-100' />
                                    <div className='card-body p-0 pt-2'>
                                        <h5 className='card-title text-wrap'>{val.title}</h5>
                                        <p>
                                            {moment(val.release_date).format('MMM Do YYYY')}
                                            <span className='badge text-bg-dark float-end'>Ratng {Number(val.vote_average).toFixed(1)}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
