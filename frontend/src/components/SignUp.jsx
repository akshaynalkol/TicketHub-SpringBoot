import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <div class="modal" id="signupModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title fw-bold">Sign Up</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="box">
                                    <form>
                                        <input type="text" id="name" class="form-control mb-3" placeholder="Enter name"
                                            required />
                                        <input type="email" id="email" class="form-control mb-3" placeholder="Enter email"
                                            required />
                                        <input type="password" id="pass" class="form-control mb-3"
                                            placeholder="Enter phone no" required />
                                        <input type="date" id="pass" class="form-control mb-3"
                                            placeholder="Enter dob" required />
                                        <div className='d-flex mb-3'>
                                            <select className='form-select me-2'>
                                                <option>Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                            <select className='form-select '>
                                                <option>Marital Status</option>
                                                <option>Married</option>
                                                <option>Unmarried</option>
                                            </select>
                                        </div>
                                        <div className='input-group mb-3'>
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
                                        <div className='input-group mb-4'>
                                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Enter confirm password'
                                                className='form-control border-end-0'
                                                name='confirmPassword' id='confirmPassword' onChange={(e) => handleOnChange(e)}
                                                required />
                                            <span className='input-group-text cursor-pointer bg-transparent border'
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {
                                                    showConfirmPassword ? <FaEyeSlash /> : <FaEye />
                                                }
                                            </span>
                                        </div>
                                        <button class="btn btn-outline-success w-100">Sign Up</button>
                                        <p class="small text-center">
                                            Not a member?&nbsp;
                                            <button class="btn p-0 text-decoration-underline text-primary"
                                                data-bs-toggle="modal" data-bs-target="#loginModal">Login Here</button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
