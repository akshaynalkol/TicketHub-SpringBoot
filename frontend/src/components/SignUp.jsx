import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { signUpUser, validateEmail, validatePhoneNo } from '../services/UserService';
import { closeModel } from '../constants/Utils';

export default function SignUp() {
    const [emailChecked, setEmailChecked] = useState(false);
    const [phoneChecked, setPhoneChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm();

    const password = watch("password", ""); // Watch the password field

    const checkEmail = async (email) => {
        if (!email) return;
        try {
            const res = await validateEmail(email);
            clearErrors('email');
            toast.success("Email is available!");
            setEmailChecked(true);
        } catch (err) {
            setError('email', { type: 'manual', message: 'Email is already in use.' });
            setEmailChecked(false);
        }
    };

    const checkPhone = async (phone) => {
        if (!phone) return;
        try {
            const res = await validatePhoneNo(phone);
            clearErrors('phone');
            toast.success("Phone number is available!");
            setPhoneChecked(true);
        } catch (err) {
            setError('phone', { type: 'manual', message: 'Phone number is already in use.' });
            setPhoneChecked(false);
        }
    };

    const onSubmit = async (data) => {
        if (!emailChecked) {
            toast.error("Please ensure the email is valid before submitting.");
            return;
        }
        if (!phoneChecked) {
            toast.error("Please ensure the phone number is valid before submitting.");
            return;
        }

        const user = data;
        console.log(user);

        try {
            let res = await signUpUser(user);
            // console.log(res);
            reset();
            toast.success(res.data.message);
            closeModel("signupModal");
        } catch (error) {
            // console.log(error);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

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
                                            {...register("email", {
                                                required: "This field is required",
                                                validate: (value) => emailChecked || "Email is not validated.",
                                            })}
                                            onBlur={(e) => checkEmail(e.target.value)}
                                        />
                                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}

                                        <input type="tel" id="phone" className="form-control mt-3" placeholder="Enter phone no"
                                            {...register("phone", {
                                                required: "This field is required",
                                                validate: (value) => phoneChecked || "Phone number is not validated.",
                                            })}
                                            onBlur={(e) => checkPhone(e.target.value)}
                                        />
                                        {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}

                                        <input type="date" id="dob" className="form-control mt-3" placeholder="Enter dob"
                                            {...register("dob", { required: true })} />
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
                                                className='form-control border-end-0' {...register("password", { required: true })} />
                                            <span className='input-group-text cursor-pointer bg-transparent border'
                                                onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                        </div>
                                        {errors.password && <p className='text-danger'>This field is required</p>}

                                        <div className='input-group mt-3'>
                                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm password'
                                                className='form-control border-end-0' {...register("confirmPassword", {
                                                    required: "This field is required",
                                                    validate: value => {
                                                        // console.log("Password:", password, "Confirm Password:", value);
                                                        return value === password || "Passwords do not match";
                                                    }
                                                })} />
                                            <span className='input-group-text cursor-pointer bg-transparent border'
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                        </div>
                                        {errors.confirmPassword && <p className='text-danger mb-0'>{errors.confirmPassword.message}</p>}

                                      
                                        <button className="btn btn-outline-success w-100 mt-4">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
