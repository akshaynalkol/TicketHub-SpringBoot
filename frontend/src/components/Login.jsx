import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SignUp from './SignUp';
import axios from 'axios';
import { signInUser } from '../services/UserService';


export default function Login({ setUser, setIsOpen }) {
    const [showPassword, setShowPassword] = useState(false);
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
            let res = await signInUser(user);
            // console.log(res);
            toast.success("User Signin Successfully!!");
            sessionStorage.setItem("user_details", JSON.stringify(res.data));
            setUser(res.data);
            setIsOpen(false);
            closeModel(); 
            // setTimeout(() => {
            //     location.reload();
            // }, 2000);
        } catch (error) {
            // console.log(error);
            toast.error(error.response?.data?.message || "An error occurred");
            // setTimeout(() => {
            //     location.reload();
            // }, 2000);
        }
    }
    // console.log(watch("email")) // watch input value by passing the name of it

    function closeModel() {
        const modalElement = document.getElementById('loginModal');
  
        // Create a Bootstrap Modal instance
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
      
        // Hide the modal
        modalInstance.hide();
      
        // Optionally, perform additional actions
        console.log('Modal closed programmatically');
    }

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
                                            {...register("password", { required: true })} />
                                        <span className='input-group-text cursor-pointer bg-transparent border'
                                            onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </span>
                                    </div>
                                    {errors.password && <span className='text-danger'>This field is required</span>}
                                    <button className="btn btn-outline-danger w-100 mt-4">Login</button>
                                    <p class="small text-center">
                                        Not a member?&nbsp;
                                        <button className="btn p-0 text-decoration-underline text-primary"
                                            data-bs-toggle="modal" data-bs-target="#signupModal">SignUp Here</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <SignUp />
        </>
    )
}
