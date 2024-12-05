import React from 'react'
import Banner from '../../components/Banner'
import NowPlaying from '../../components/NowPlaying'
import Upcoming from '../../components/Upcoming'
import Box from '../../components/Box'
import CustomEvent from '../../components/CustomEvent'
import SeatBooking from '../../components/SeatBooking'

export default function Home() {
    return (
        <>
            <Banner />
            <Upcoming />
            <NowPlaying />
            <Box />
            <CustomEvent />
            <SeatBooking />
        </>
    )
}
