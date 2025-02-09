import React from 'react'
import Banner from '../../components/Banner'
import SliderComp from '../../components/SliderComp'
import Box from '../../components/Box'
import { getMovies } from '../../services/MovieService'
import AdminDashboard from '../Dashboard/Admin'
import TheaterOwnerDashboard from '../Dashboard/TheaterOwner'
import UserProfilePage from '../Dashboard/UserProfilePage'
import RazorpayButton from '../Payment/RazorpayButton'
import Payment from '../Payment/Payment'

export default function Home() {    
    return (
        <>
            {/* <Banner />
            <SliderComp heading="Upcoming" getMovies={() => getMovies("Upcoming")} show={true} />
            <SliderComp heading="Now Playing" getMovies={() => getMovies("NowPlaying")} />
            <Box />
            <SliderComp heading="Popular Movies" getMovies={() => getMovies("Popular")} /> */}

         <UserProfilePage />
            <AdminDashboard />
            <TheaterOwnerDashboard /> 

            {/* <RazorpayButton/>
            <Payment/> */}
        </>
    )
}
