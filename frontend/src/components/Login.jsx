import React, { useState } from 'react'
import SignUp from './SignUp';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div class="modal" id="loginModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title fw-bold">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <form className=''>
                                    <input type="email" id="uname" class="form-control mb-3" placeholder="Enter E-mail"
                                        required />
                                    <div className='input-group mb-4'>
                                        <input type={showPassword ? 'text' : 'password'} placeholder='Enter password'
                                            className='form-control border-end-0' name='password' id='password'
                                            onChange={(e) => handleOnChange(e)} required />
                                        <span className='input-group-text cursor-pointer bg-transparent border'
                                            onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </span>
                                    </div>
                                    <button class="btn btn-outline-danger w-100">Login</button>
                                    <p class="small text-center">
                                        Not a member?&nbsp;
                                        <button class="btn p-0 text-decoration-underline text-primary"
                                            data-bs-toggle="modal" data-bs-target="#signupModal">SignUp Here</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SignUp />
        </>
    )
}
