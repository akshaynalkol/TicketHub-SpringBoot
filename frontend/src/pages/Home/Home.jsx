import React from 'react'
import Banner from '../../components/Banner'
import SliderComp from '../../components/SliderComp'
import Box from '../../components/Box'
import { getCustomEvents, getNowPlayingMovies, getUpcomingMovies } from '../../services/MovieService'

export default function Home() {
    return (
        <>
            <Banner />
            <SliderComp heading="Upcoming" getMovies={getUpcomingMovies} show={true}/>
            <SliderComp heading="Now Playing" getMovies={getNowPlayingMovies} />
            <Box />
            <SliderComp heading="Outdoor Events" getMovies={getCustomEvents} />  
        </>
    )
}
