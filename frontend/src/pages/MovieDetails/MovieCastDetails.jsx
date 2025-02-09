import React, { useEffect, useState } from 'react';
import { getMoviesCast } from '../../services/MovieService';

const MovieCastDetails = ({ id }) => {
    const [data, setData] = useState([]);
    const [cast, setCast] = useState([]);

    const getData = async () => {
        const res = await getMoviesCast(id);
        // console.log(res);

        setData(res.data);
        setCast(res.data.casts);
    }

    useEffect(() => {
        getData();
    }, [id]);

    return (
        <>

            <p className='border-top pt-2 mb-2'>
                Director : {data?.writer ?  data?.director : "Not Available"}
            </p>
            <p className='border-top border-bottom pt-2 pb-2'>
                Writer : {data?.writer ? data?.writer : "Not Available"}
            </p>
            <div className='row gy-4'>
                <h4 className='fw-bold'>Cast :</h4>
                {
                    cast &&
                    cast.filter(el => el?.profile_path).map((val, index) => {
                        return (
                            <div className='col-xl-2 col-md-3 col-sm-4 col-6 text-center ' key={index}>
                                <img src={val.profile_path && 'https://image.tmdb.org/t/p/w200/' + val.profile_path}
                                    className='w-100' alt="Profile" />
                                <p className='mb-0'>{val.name}</p>
                                {/* <p className='mb-0'>Character : {val.character}</p> */}
                            </div>
                        )
                    })

                }
            </div>
        </>
    )
}

export default MovieCastDetails;