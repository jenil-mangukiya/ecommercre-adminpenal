import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add_user() {

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!sessionStorage.getItem('userid')) {
    //         navigate('/');
    //     }
    // }, [])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const registerUser = (e) => {

        e.preventDefault()

        if(name && email && password && password===repassword){
            
            axios.post(`${BASE_URL}/admin/signup`, {
                name : name,
                email : email,
                password : password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

        }
        
    }


    return (
        <>
            <div className="wrapper">
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                                <i className="fas fa-bars" />
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="../../index3.html" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="navbar-search"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-search" />
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input
                                            className="form-control form-control-navbar"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                            <button
                                                className="btn btn-navbar"
                                                type="button"
                                                data-widget="navbar-search"
                                            >
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* Messages Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-comments" />
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img
                                            src="../../dist/img/user1-128x128.jpg"
                                            alt="User Avatar"
                                            className="img-size-50 mr-3 img-circle"
                                        />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                                <span className="float-right text-sm text-danger">
                                                    <i className="fas fa-star" />
                                                </span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted">
                                                <i className="far fa-clock mr-1" /> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img
                                            src="../../dist/img/user8-128x128.jpg"
                                            alt="User Avatar"
                                            className="img-size-50 img-circle mr-3"
                                        />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                                <span className="float-right text-sm text-muted">
                                                    <i className="fas fa-star" />
                                                </span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted">
                                                <i className="far fa-clock mr-1" /> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    {/* Message Start */}
                                    <div className="media">
                                        <img
                                            src="../../dist/img/user3-128x128.jpg"
                                            alt="User Avatar"
                                            className="img-size-50 img-circle mr-3"
                                        />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                                <span className="float-right text-sm text-warning">
                                                    <i className="fas fa-star" />
                                                </span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted">
                                                <i className="far fa-clock mr-1" /> 4 Hours Ago
                                            </p>
                                        </div>
                                    </div>
                                    {/* Message End */}
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">
                                    See All Messages
                                </a>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#">
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">
                                    15 Notifications
                                </span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-envelope mr-2" /> 4 new messages
                                    <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-users mr-2" /> 8 friend requests
                                    <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <i className="fas fa-file mr-2" /> 3 new reports
                                    <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">
                                    See All Notifications
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="fullscreen"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-expand-arrows-alt" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="control-sidebar"
                                data-slide="true"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-th-large" />
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="../../index3.html" className="brand-link">
                        <img
                            src="../../dist/img/AdminLTELogo.png"
                            alt="AdminLTE Logo"
                            className="brand-image img-circle elevation-3"
                            style={{ opacity: ".8" }}
                        />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img
                                    src="../../dist/img/user2-160x160.jpg"
                                    className="img-circle elevation-2"
                                    alt="User Image"
                                />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">
                                    Alexander Pierce
                                </a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input
                                    className="form-control form-control-sidebar"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Header />
                    </div>
                    {/* /.sidebar */}
                </aside>

                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>User Registation</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">User Registation</li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                        {/* /.container-fluid */}
                    </section>
                    {/* add form section start */}
                    <section className='add-pro-form'>
                        <div className='container-fluid'>
                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title mt-2">User Registation Form</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                Full Name
                                            </label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputName"
                                                    placeholder="Full Name"
                                                    value={name}
                                                    onChange={(e)=>{setName(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                Email
                                            </label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputEmail3"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e)=>{setEmail(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                Password
                                            </label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e)=>{setPassword(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                Re-Pasword
                                            </label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="Re-Password"
                                                    placeholder="Re-Password"
                                                    value={repassword}
                                                    onChange={(e)=>{setRepassword(e.target.value)}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-info" onClick={registerUser}>
                                            Register
                                        </button>
                                    </div>
                                    {/* /.card-footer */}
                                </form>
                            </div>
                            {/* /.card */}
                        </div>
                    </section>
                    {/* add form section end */}
                </div>


                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>
                        Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
                    </strong>{" "}
                    All rights reserved.
                </footer>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>
        </>
    )
}

export default Add_user