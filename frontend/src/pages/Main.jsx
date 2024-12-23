import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export default function Main() {
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user_details');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    // console.log(user);

    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <Outlet context={{ setUser }} />
            <Footer />
        </>
    )
}
