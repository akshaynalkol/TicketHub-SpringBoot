import React from 'react'

export default function SignUp() {
    return (
        <>
            <div class="modal" id="signupModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title">Sign Up</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="box">
                                    <form>
                                        <label for="name">Enter Name</label>
                                        <input type="text" id="name" class="form-control mb-3" placeholder="Enter Name"
                                            required />
                                        <label for="email">Enter Email</label>
                                        <input type="email" id="email" class="form-control mb-3" placeholder="Enter E-mail"
                                            required />
                                        <label for="pass">Enter Password</label>
                                        <input type="password" id="pass" class="form-control mb-3"
                                            placeholder="Choose A Password" required />
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
