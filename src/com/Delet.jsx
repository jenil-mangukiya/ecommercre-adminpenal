import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button, Card } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Delet() {
    const {id} = useParams()

    const [data, setdata] = useState([]);   
    const navigate = useNavigate() 
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        if (!sessionStorage.getItem('userid')) {
            navigate('/');
        }
        axios.delete(`${BASE_URL}/admin/deleteproduct/${id}`, {
        })
            .then(function (response) {
                console.log(response.data.productData);
                // setdata(response.data.productData);
                navigate('/manage');
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            {/* <Manage/> */}
        </>
    )
}

export default Delet