import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { ImMobile } from "react-icons/im";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Header = () => {

    let[val,setval]=useState([]);

    useEffect(() => {


        axios.get('https://dummyjson.com/products/categories')
          .then(function (response) {
            // handle success
            console.log(response);
            setval(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        },[])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header>

                <div className="container-fluid border-bottom">
                    <div className="row gx-0 py-3 ">
                        <div className="col-2 py-2 logo">
                            {/* <img src={require('./image/1.png')} className="img1"></img> */}
                            meesho
                        </div>
                        {/* <div className="col-3 pt-3">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search for products"
                                    className="me-2 p-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </div> */}
                        <div className='col-3 pt-4 top-1 d-flex ms-auto'>
                            <div className='me-2'><ImMobile></ImMobile></div>
                            <div> Download App  </div>
                            <div className='ps-4'> Become a Supplier</div>
                        </div>
                        <div className='col-1 pt-3 top-2 d-flex text-center fw-bold'>
                            <div> <BsCart></BsCart> Cart</div>
                            <div className='ms-2'><AiOutlineUser></AiOutlineUser>Profile</div>
                        </div>
                        <div className='col-auto ms-2 pt-4 btn-1'>
                            <Button variant="primary" onClick={handleShow}>
                                Product
                            </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Catedary</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    {
                                        val.map((item) => {
                                            return (
                                                <>
                                                {/* <div>{item}</div> */}
                                                <Link to={`/category/${item}`}><div className='l-1'>{item}</div></Link>
                                                </>
                                            )
                                        })
                                    }
                                </Offcanvas.Body>
                            </Offcanvas>

                        </div>
                    </div>
                </div>
                <div>
                    <ul className='d-flex'>
                        <li><a href="/">Home</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header