import React from 'react';
import CardComp from '../../components/CardComp';
import Filter from '../../components/Filter';
import { getMovies } from '../../services/MovieService';

export default function Movies() {
    return (
        <>
            <div className='container'>
                <div className='row align-items-start'>
                    <div className='col-3 d-none d-lg-inline-block'>
                        <Filter />
                    </div>
                    <div className='col-lg-9'>
                        <CardComp/>
                    </div>
                </div>
            </div>
        </>
    )
}
