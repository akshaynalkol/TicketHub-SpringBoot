import React from 'react';
import CardComp from '../../components/CardComp';
import Filter from '../../components/Filter';
import { getUpcomingMovies } from '../../services/MovieService';

export default function MoviesUpcoming() {
    return (
        <>
            <div className='container'>
                <div className='row'>       
                    <div className='col-3 d-none d-lg-inline-block'>
                        <Filter />
                    </div>
                    <div className='col-lg-9'>
                        <CardComp heading1='Upcoming Movies' heading2='Now Showing' 
                        getMovies={getUpcomingMovies} path='/movies'/>
                    </div>
                </div>
            </div>
        </>
    )
}
