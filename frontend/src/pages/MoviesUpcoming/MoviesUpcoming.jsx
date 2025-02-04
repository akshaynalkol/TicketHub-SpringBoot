import React from 'react';
import CardComp from '../../components/CardComp';
import Filter from '../../components/Filter';
import { getMovies } from '../../services/MovieService';

export default function MoviesUpcoming() {
    return (
        <>
            <div className='container'>
                <div className='row align-items-start'>       
                    <div className='col-3 d-none d-lg-inline-block'>
                        <Filter />
                    </div>
                    <div className='col-lg-9'>
                        <CardComp heading1='Upcoming Movies' heading2='Now Showing' 
                        getMovies={()=>getMovies("Upcoming")} path='/movies'/>
                    </div>
                </div>
            </div>
        </>
    )
}
