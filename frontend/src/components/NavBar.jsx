import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import '../App.css';

import logo from '../assets/logo.jpg';
import Login from './Login';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-lg">
                <div className="container d-flex flex-column">
                    <div className='d-flex w-100'>
                        <NavLink className="navbar-brand" to='/'>
                            <h4 className='fw-bold mb-0'>TicketHub</h4>
                            {/* <img src={logo} width={150} height={50}/> */}
                        </NavLink>
                        <div className='me-auto ms-sm-5 col-7'>
                            <input className="form-control me-2" type="search" placeholder="Search..." />
                        </div>
                        <NavLink to="/dashboard" className="fw-normal text-dark pe-2">
                            <FaRegCircleUser className='fs-1' />
                        </NavLink>
                        <button className="navbar-toggler border-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <button class="btn btn-danger px-5 border-0 d-none d-lg-inline-block" data-bs-toggle="modal"
                            data-bs-target="#loginModal">Login</button>
                    </div>
                    <div className="collapse navbar-collapse me-auto mt-3 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movie">Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/event">Event</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    More
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Page1</a></li>
                                    <li><a className="dropdown-item" href="#">Page2</a></li>
                                    <li><a className="dropdown-item" href="#">Page3</a></li>
                                    <li><a className="dropdown-item" href="#">Page4</a></li>
                                </ul>
                            </li>
                            <button class="btn btn-danger px-5 mt-2 d-lg-none d-inline-block" data-bs-toggle="modal"
                                data-bs-target="#loginModal">Login</button>
                        </ul>
                    </div>
                </div>
            </nav>
            <Login />
        </>
    )
}
