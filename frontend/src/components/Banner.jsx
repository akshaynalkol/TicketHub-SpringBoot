import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, IMAGE_MAX_BASE_URL, IMAGE_MIN_BASE_URL, TRENDING_API_URL } from '../constants/ApiConstants';

export default function Banner() {
    const [data, setData] = useState([])
    const [key, setKey] = useState('');
    const [loading, setLoading] = useState(false);

    async function getData() {
        setLoading(true);
        let res = await axios.get(TRENDING_API_URL)
        // console.log(res)
        // console.log(res.data.results);

        setLoading(false);
        setData(res.data.results);
    }

    useEffect(() => {
        getData();
    }, []);

    async function handlePlay(id, index) {
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
        // console.log(res);
        // console.log(res.data.results);

        setKey(res.data.results[index].key)
        // console.log(id);
        // console.log(key)
    }

    useEffect(() => {
        handlePlay(912649)
    }, [key]);

    if (loading === true) {
        return <p className='text-center text-dark py-5'><span className='spinner-border'></span></p>
    }

    return (
        <>
            <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel"
                data-bs-interval='5000'>
                <div className="carousel-inner">
                    {
                        data.map((val, index) => {
                            return (
                                <div className={`carousel-item ${index === 1 ? 'active' : ''} `} key={index}>
                                    <img src={`${IMAGE_MAX_BASE_URL}${val.backdrop_path}`} alt='Movie Poster'
                                        className='w-100 vh-100' />
                                    <div class="carousel-caption text-start col-lg-5 col-md-7 col-12 start-0 top-0 p-0 px-5" >
                                        <img src={`${IMAGE_MIN_BASE_URL}${val.poster_path}`}
                                            className='' height={300} />
                                        <h3 className='fw-bold pt-2'>{val.original_title}</h3>
                                        <p className='mb-2' style={{ textAlign: 'justify' }}>{val.overview}</p>
                                        <p>
                                            Rating : {Number(val.vote_average).toFixed(1)} &nbsp;|&nbsp;
                                            View : {Number(val.vote_count).toFixed(0)}
                                        </p>
                                        <button type="button" className="btn btn-light px-5 py-2 fw-bold" data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop" onClick={() => handlePlay(val.id, index)}>
                                            Play Now
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>


            <div className="modal fade col-9" id="staticBackdrop" >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content bg-black">
                        <div className="modal-header data-bs-dark border-0">
                            <button type="button" className="btn-close btn-close-white"
                                data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body p-0">
                            <iframe className="w-100" height="500"
                                src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=0`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
