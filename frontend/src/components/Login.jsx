import React from 'react';
import { useState } from 'react';
import SignUp from './SignUp';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signInUser, verifyOTP } from '../services/UserService';
import { closeModel } from '../constants/Utils';
import { authenticateService } from '../services/AuthenticateService';


export default function Login({ user, setUser }) {
    const [step, setStep] = useState(1);
    const [data, setData] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (user) => {
        console.log(user);
        if (step === 1) {
            try {
                // let res = await signInUser(user);   

                let res = await authenticateService(user);
                console.log(res);
                toast.success(res.data.message);
                setData(res?.data?.user || res?.data?.theaterOwner || res?.data?.admin);
                reset();
                setStep(2);
                // closeModel("loginModal");
            } catch (error) {
                // console.log(error);
                toast.error(error.response?.data?.message || "An error occurred");
            }
        }
        else {
            console.log(data);
            let dataa = {
                email: data.email,
                otp: user.otp
            }
            try {
                let res = await verifyOTP(dataa);
                // console.log(res);
                toast.success(res.data.message);
                sessionStorage.setItem("user_details", JSON.stringify(data));
                setUser(data);
                reset();
                setStep(1);
                closeModel("loginModal");
            } catch (error) {
                // console.log(error);
                setData('');
                toast.error(error.response?.data?.message || "An error occurred");
                setStep(1);
                closeModel("loginModal");
            }
        }
    }

    const validatePassword = (password) => {
        if (password.length <6 || password.length > 12) {
            return "Password must be 6-12 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Must contain at least one lowercase letter.";
        }
        if (!/\d/.test(password)) {
            return "Must contain at least one number.";
        }
        if (!/[@$!%*?&]/.test(password)) {
            return "Must contain at least one special character (@, $, !, %, *, ?, &).";
        }
        return true;
    };


    // console.log(watch("email")) // watch input value by passing the name of it

    return (
        <>
            <div className="modal" id="loginModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fw-bold">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {
                                    step === 1 ?
                                        <>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <input type="email" id="uname" className="form-control"
                                                    placeholder="Enter E-mail"
                                                    {...register("email", {
                                                        required: "Email is required",
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                            message: "Please enter a valid email address",
                                                        },
                                                    })}
                                                />
                                                {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                                                <div className='input-group mt-3'>
                                                    <input type={showPassword ? 'text' : 'password'} placeholder='Enter password'
                                                        className='form-control border-end-0' id='password'
                                                        onChange={(e) => handleOnChange(e)}
                                                        {...register("password", {
                                                            required: true,
                                                            validate: validatePassword,
                                                        })} />
                                                    <span className='input-group-text cursor-pointer bg-transparent border'
                                                        onClick={() => setShowPassword(!showPassword)}>
                                                        {
                                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                                        }
                                                    </span>
                                                </div>
                                                {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                                                <button className="btn btn-outline-danger w-100 mt-4">Send OTP</button>
                                            </form>
                                            <p class="small text-center">
                                                Not a member?&nbsp;
                                                <button className="btn p-0 text-decoration-underline text-primary"
                                                    data-bs-toggle="modal" data-bs-target="#signupModal">SignUp Here</button>
                                            </p>
                                        </> :
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input type="text" id="otp" className="form-control" placeholder="Enter OTP"
                                                {...register("otp", { required: true })} />
                                            {errors.otp && <p className='text-danger mb-0'>OTP is required</p>}
                                            <button className="btn btn-outline-danger w-100 mt-4">Verify OTP</button>
                                        </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <SignUp />
        </>
    )
}
