import React from 'react'
import { Accordion } from 'react-bootstrap'
import { AiOutlineProduct } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* Sidebar Menu */}
            <nav className="mt-2">
                <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    {/* Add icons to the links using the .nav-icon class
                                with font-awesome or any other icon font library */}
                    <Accordion className='mb-2'>
                        <Accordion.Item eventKey="0" className="bg">
                            {/* <li className="nav-item menu-open"> */}
                            <Accordion.Header className="nav-link active collapsed">
                                <i className="nav-icon fas fa-tachometer-alt text-white me-2" />
                                <p className="bg-transparent text-white">
                                    Dashboard
                                    {/* <i className="right fas fa-angle-left" /> */}
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                {/* <ul className="nav nav-treeview">
                                <li className="nav-item"> */}
                                <Link to="/index" className="nav-link">
                                    <i className="far fa-circle nav-icon me-3" />
                                    <p>Dashboard v1</p>
                                </Link>
                                {/* </li> */}
                                {/* <li className="nav-item"> */}
                                <Link to="/index2" className="nav-link">
                                    <i className="far fa-circle nav-icon me-3" />
                                    <p>Dashboard v2</p>
                                </Link>
                                {/* </li> */}
                                {/* <li className="nav-item"> */}
                                <Link to="/index3" className="nav-link ">
                                    <i className="far fa-circle nav-icon me-3" />
                                    <p>Dashboard v3</p>
                                </Link>
                                {/* </li>
                            </ul> */}
                            </Accordion.Body>
                            {/* </li> */}
                        </Accordion.Item>
                    </Accordion>

                    <Accordion className='mb-2'>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header className="nav-link collapsed active">
                                <i className="nav-icon fas fa-edit text-white me-2" />
                                <p className='text-white'>
                                    Forms
                                    {/* <i className="fas fa-angle-left right" /> */}
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                {/* <a href="pages/forms/general.html" className="nav-link"> */}
                                <Link to="/general" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>General Elements</p>
                                </Link>
                                {/* </a> */}
                                <a href="pages/forms/advanced.html" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Advanced Elements</p>
                                </a>
                                <a href="pages/forms/editors.html" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Editors</p>
                                </a>
                                <a href="pages/forms/validation.html" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Validation</p>
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion >
                    <Accordion className='mb-2'>
                        <Accordion.Item eventKey="0" className="bg">
                            <Accordion.Header className="nav-link active collapsed">
                                <i className="nav-icon fas fa-table text-white me-2" />
                                <p className='text-white'>
                                    Tables
                                    {/* <i className="fas fa-angle-left right" /> */}
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <a href="pages/tables/simple.html" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Simple Tables</p>
                                </a>
                                {/* <a href="pages/tables/data.html" className="nav-link"> */}
                                <Link to="/data" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>DataTables</p>
                                </Link>
                                {/* </a> */}
                                <a href="pages/tables/jsgrid.html" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>jsGrid</p>
                                </a>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion >
                    <Accordion className='mb-2'>
                        <Accordion.Item eventKey="0" className="bg">
                            <Accordion.Header className="nav-link active collapsed">
                                {/* <i className="nav-icon fas fa-table text-white me-2" /> */}
                                <AiOutlineProduct className="nav-icon text-white me-2" />
                                <p className='text-white'>
                                    Products
                                    {/* <i className="fas fa-angle-left right" /> */}
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Link to="/add" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Add Product</p>
                                </Link>
                                <Link to="/manage" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Manage Product</p>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion >
                    <Accordion className='mb-2'>
                        <Accordion.Item eventKey="0" className="bg">
                            <Accordion.Header className="nav-link active collapsed">
                                {/* <i className="nav-icon fas fa-table text-white me-2" /> */}
                                <FaRegUserCircle className="nav-icon text-white me-2" />
                                <p className='text-white'>
                                    User
                                    {/* <i className="fas fa-angle-left right" /> */}
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Link to="/add_user" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Add User</p>
                                </Link>
                                <Link to="/manage_user" className="nav-link">
                                    <i className="far fa-circle nav-icon me-2" />
                                    <p>Manage User</p>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion >
                    <button className='py-2 rounded-2 text-bg-danger text-white' onClick={() => {
                        sessionStorage.removeItem('userid');
                    }}>LOGOUT</button>
                </ul>
            </nav >
            {/* /.sidebar-menu */}
        </>
    )
}

export default Header