import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { Row, Col, Container, Button, Table } from 'react-bootstrap';
import { BsFillGridFill } from 'react-icons/bs';
const Header = (props) => {

    // Navbar Bg Change

    const [navbar, setNavbar] = useState(false)
    const changeNavBg = () => {
        { window.scrollY >= 60 ? setNavbar(true) : setNavbar(false) }
    }
    window.addEventListener('scroll', changeNavBg);


    return (
        <>
            <Row className={navbar ? "justify-content-around header-row bg-color" : "justify-content-around header-row"}>
                <Col xs={12} md={5} className="logo">

                    <h4><BsFillGridFill /><span className="exact-data">Exact Data</span></h4>
                    <div className="header-logo-text">
                        <p>powered by </p>
                        <h5> data axle</h5>
                        <p className="usa">. USA </p>

                    </div>
                </Col>
                <Col xs={5} className="question-col" >
                    <p className="header-question">Questions? Speak with our Experts at <span>877.440.3282</span></p>
                </Col>
            </Row>
            
        </>
    );
}

export default Header;