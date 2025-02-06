import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Login from './Login';
import { ROUTES } from '../constants/RouteConstants';
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_VIDEO_API } from '../constants/ApiConstants';

export default function NavBar({ user, setUser }) {
    const nav = useNavigate();
    const [key, setKey] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (key.length > 0) {
            nav(`search?q=${key}`);
        }
    }, [key]);

    const getSearchSuggestions = async () => {
        const res = await fetch(YOUTUBE_SEARCH_API + key);
        const data = await res.json();
        console.log(data);
        setSuggestion(data[1]);
    }

    useEffect(() => {
        getSearchSuggestions();
    }, [key]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-lg">
                <div className="container d-flex flex-column">
                    <div className='d-flex w-100'>
                        <NavLink className="navbar-brand" to={ROUTES.HOME}>
                            <h4 className='fw-bold mb-0'>TicketHub</h4>
                        </NavLink>
                        <div className='me-auto ms-sm-5 col-7 position-relative'>
                            <div className='input-group'>
                                <span className='input-group-text bg-white fs-5'>
                                    <IoIosSearch />
                                </span>
                                <input className="form-control border-start-0 p-2" type="search"
                                    placeholder="Search for movies, events and many more..."
                                    value={key} onChange={(e) => setKey(e.target.value)}
                                    onFocus={() => setShowSuggestions(true)}
                                    onBlur={() => setShowSuggestions(false)}
                                />
                            </div>
                            {
                                showSuggestions &&
                                <div className='position-absolute w-100 z-1'>
                                    <ul className='list-group rounded-bottom'>
                                        {
                                            suggestion?.map((val, index) => {
                                                return (
                                                    <button className='btn btn-light text-start rounded-0'
                                                        key={index} onClick={() => { setKey(val); setShowSuggestions(false) }}
                                                    >
                                                        <i className="fa-solid fa-magnifying-glass pe-3"></i>
                                                        {val}
                                                    </button>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                        {
                            user ?
                                <NavLink to={ROUTES.DASHBOARD} className="fw-normal text-dark pe-2">
                                    <FaRegCircleUser className='fs-1' />
                                </NavLink>
                                :
                                <button className="btn btn-danger px-5 border-0 d-none d-lg-inline-block" data-bs-toggle="modal"
                                    data-bs-target="#loginModal">Login</button>
                        }
                        <button className="navbar-toggler border-0 p-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                    <div className="collapse navbar-collapse me-auto mt-3 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={ROUTES.HOME}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={ROUTES.MOVIES}>Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={ROUTES.ABOUTUS}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={ROUTES.CONTACTUS}>Contact</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    More
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to={ROUTES.TERMS_CONDITION} className="dropdown-item" >Terms & Condition</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ROUTES.RETURN_POLICY} className="dropdown-item" >Return Policy</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {
                                !user &&
                                <button class="btn btn-danger px-5 mt-2 d-lg-none d-inline-block" data-bs-toggle="modal"
                                    data-bs-target="#loginModal">Login</button>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Login setUser={setUser} />
        </>
    )
}
