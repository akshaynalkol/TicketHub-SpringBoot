import React from 'react';
import CardComp from '../../components/CardComp';
import Filter from '../../components/Filter';
import { getCustomEvents } from '../../services/MovieService';

export default function Events() {
  return (
    <>
      <div className='container'>
        <div className='row align-items-start'>
          <div className='col-3 d-none d-lg-inline-block'>
            <Filter />
          </div>
          <div className='col-lg-9'>
            <CardComp heading1='Events' heading2='Upcoming Events' 
                        getMovies={getCustomEvents} path='/events-upcoming'/>
          </div>
        </div>
      </div>
    </>
  )
}
