import React from 'react'
import Banner from '../../components/Banner'
import SliderComp from '../../components/SliderComp'
import Box from '../../components/Box'
import { getMovies} from '../../services/MovieService'

export default function Home() {
    return (
        <>
            <Banner />
            <SliderComp heading="Upcoming" getMovies={()=>getMovies("Upcoming")} show={true}/>
            <SliderComp heading="Now Playing" getMovies={()=>getMovies("NowPlaying")} />
            <Box />
            <SliderComp heading="Outdoor Events" getMovies={()=>getMovies("Popular")} />  
        </>
    )
}
