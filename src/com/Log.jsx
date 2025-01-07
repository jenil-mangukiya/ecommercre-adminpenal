import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Log() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const registerUser = (e) => {

        e.preventDefault()

            axios.post('http://localhost:5000/admin/login', {
                email:email,
                password:password

            })
                .then(function (response) {
                    console.log(response);
                    if(response.status == 200 ){
                        navigate('/index');
                        alert('login successfully')
                        sessionStorage.setItem('userid',response.data.data.userId)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    
                    alert('email and password are not match')
                });
    }
    return (
        <>
            <div className="hold-transition login-page">
                <div className="login-box" >
                    <div className="login-logo">
                        {/* <a href="../../index2.html"> */}
                        <Link to="/index" className='dec'>
                            <b>Admin</b>LTE
                        </Link>
                        {/* </a> */}
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form action="../../index3.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block" onClick={registerUser}>
                                            Sign In
                                        </button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                </a>
                            </div>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <a href="forgot-password.html" className='dec'>I forgot my password</a>
                            </p>
                            <p className="mb-0">
                                <Link to={'/add_user'}><a href="register.html" className="text-center dec">
                                    Register a new membership
                                </a></Link>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
                {/* /.login-box */}
            </div>
        </>

    )
}

export default Log