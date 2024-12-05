import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGE_MIN_BASE_URL, UPCOMING_API_URL } from '../constants/ApiConstants';

// CSS
import '../pages/Home/Home.css';

export default function Upcoming() {
    const [data, setData] = useState([]);

    async function getData() {
        let res = await axios.get(UPCOMING_API_URL);
        // console.log(res.data);

        setData(res.data.results);
    }

    useEffect(() => {
        getData();
    }, []);

    const setting = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false 
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <>
            <div className='container'>
                <h2 className='fw-bold mt-5 mb-4'>Upcoming</h2>
                <div className='row'>
                    <Slider {...setting}>
                        {
                            data.map((val, index) => {
                                return (
                                    <div key={index} className='card border-0'>
                                        <img src={`${IMAGE_MIN_BASE_URL}${val.poster_path}`} className='card-img w-100 anim-scale' />
                                        <div className='card-img-overlay p-0'>
                                            <p className='text-bg-dark w-50 rounded-end p-1 px-2 mt-2'># {index + 1} Trending</p>
                                        </div>
                                        <div className='card-body p-0 pt-2'>
                                            <h5 className='card-title text-wrap'>{val.title}</h5>
                                            <p>
                                                {moment(val.release_date).format('MMM Do YYYY')}
                                                <span className='badge text-bg-dark float-end'>Ratng {Number(val.vote_average).toFixed(1)}</span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
