import React from 'react';
import Movie from '../../components/Movie';
import Filter from '../../components/Filter';

export default function Events() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filter />
          </div>
          <div className='col-9'>
            <Movie />
          </div>
        </div>
      </div>
    </>
  )
}
