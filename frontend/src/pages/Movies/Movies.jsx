import React from 'react';
import Movie from '../../components/Movie';
import Filter from '../../components/Filter';

export default function Movies() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 d-none d-lg-inline-block'>
                        <Filter />
                    </div>
                    <div className='col-lg-9'>
                        <Movie />
                    </div>
                </div>
            </div>
        </>
    )
}
