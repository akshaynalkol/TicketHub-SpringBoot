import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { signUpUser } from '../services/UserService';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const user = data;
        // console.log(user);

        try {
            let res = await signUpUser(user); 
            // console.log(res);
            toast.success(res.data.message);
            setTimeout(() => {
                location.reload();
            }, 1000);
        } catch (error) {
            // console.log(error);       
            toast.error(error.response.data.message);
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }
    // console.log(watch("email")) // watch input value by passing the name of it

    return (
        <>
            <div className="modal" id="signupModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fw-bold">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="box">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="text" id="name" className="form-control" placeholder="Enter name"
                                            {...register("name", { required: true })} />
                                        {errors.name && <p className='text-danger'>This field is required</p>}
                                        <input type="email" id="email" className="form-control mt-3" placeholder="Enter email"
                                            {...register("email", { required: true })} />
                                        {errors.email && <p className='text-danger'>This field is required</p>}
                                        <input type="tel" id="phone" className="form-control mt-3"
                                            placeholder="Enter phone no" {...register("phone", { required: true })} />
                                        {errors.phone && <p className='text-danger'>This field is required</p>}
                                        <input type="date" id="dob" className="form-control mt-3"
                                            placeholder="Enter dob" {...register("dob", { required: true })} />
                                        {errors.dob && <p className='text-danger'>This field is required</p>}
                                        <div className='d-flex w-100 mt-3'>
                                            <div className='w-100 me-2'>
                                                <select className='form-select' {...register("gender", { required: true })}>
                                                    <option value="">Gender</option>
                                                    <option value="MALE">Male</option>
                                                    <option value="FEMALE">Female</option>
                                                </select>
                                                {errors.gender && <p className='text-danger mb-0'>This field is required</p>}
                                            </div>
                                            <div className='w-100'>
                                                <select className='form-select' {...register("maritalStatus", { required: true })}>
                                                    <option value="">Marital Status</option>
                                                    <option value="MARRIED">Married</option>
                                                    <option value="UNMARRIED">Unmarried</option>    
                                                </select>
                                                {errors.maritalStatus && <p className='text-danger mb-0'>This field is required</p>}
                                            </div>
                                        </div>
                                        <div className='input-group mt-3'>
                                            <input type={showPassword ? 'text' : 'password'} placeholder='Enter password'
                                                className='form-control border-end-0' name='password' id='password'
                                                onChange={(e) => handleOnChange(e)} {...register("password", { required: true })} />
                                            <span className='input-group-text cursor-pointer bg-transparent border'
                                                onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                                }
                                            </span>
                                        </div>
                                        {errors.password && <p className='text-danger'>This field is required</p>}
                                        <div className='input-group mt-3 mb-4'>
                                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Enter confirm password'
                                                className='form-control border-end-0'
                                                name='confirmPassword' id='confirmPassword' onChange={(e) => handleOnChange(e)}
                                            />
                                            <span className='input-group-text cursor-pointer bg-transparent border'
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {
                                                    showConfirmPassword ? <FaEyeSlash /> : <FaEye />
                                                }
                                            </span>
                                        </div>
                                        <button className="btn btn-outline-success w-100">Sign Up</button>
                                        <p className="small text-center">
                                            Not a member?&nbsp;
                                            <button className="btn p-0 text-decoration-underline text-primary"
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
