import React from 'react'
import SignUp from './SignUp'

export default function Login() {
    return (
        <>
            <div class="modal" id="loginModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="box">
                                    <form>
                                        <label for="uname">Enter Username</label>
                                        <input type="email" id="uname" class="form-control mb-3" placeholder="Enter E-mail"
                                            required />
                                        <label for="pass">Enter Password</label>
                                        <input type="password" id="pass" class="form-control mb-3" placeholder="Enter Password"
                                            required />
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
            </div>
            <SignUp />
        </>
    )
}
