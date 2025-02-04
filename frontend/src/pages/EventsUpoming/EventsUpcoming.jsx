import React from 'react';
import CardComp from '../../components/CardComp';
import Filter from '../../components/Filter';
import {getMovies} from '../../services/MovieService';

export default function EventsUpcoming() {
  return (
    <>
      <div className='container'>
        <div className='row align-items-start'>
          <div className='col-3 d-none d-lg-inline-block'>
            <Filter />
          </div>
          <div className='col-lg-9'>
            <CardComp heading1='Upcoming Events' heading2='Now Showing'
              getMovies={()=>getMovies("Trending")} path='/events' />
          </div>
        </div>
      </div>
    </>
  )
}
