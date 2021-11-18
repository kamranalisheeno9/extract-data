import React, { useState } from 'react';
import './mainpage.css'
import { Row, Col, Container, Button, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Header from '../components/header'
import Card from '../components/cardcontainer'
import Form from '../components/form'
import Popup from '../components/popup'
import Countdown from 'react-countdown';
import { FiChevronsDown } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import { IoChatbubblesOutline,IoLocationSharp } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';
import { BiLineChartDown } from 'react-icons/bi';
import { FaCrosshairs, FaCogs, FaMobileAlt } from 'react-icons/fa';
import { BsCurrencyDollar, BsFillCloudArrowDownFill,BsTelephoneFill } from 'react-icons/bs';
const MainPage = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" className="pop-over" {...props}>
            A+ rating, BBB accreditted<br />
            business since 2014.
        </Tooltip>
    );

    // Table Data

    const [tableData, setTableData] = useState([
        {
            firstname: "Micheal Page",
            addressline: "1* Saddleridge Rd",
            city: "Columbia",
            state: "SC",
            zip: "29223",
            email: "m****@aol.com",
        },
        {
            firstname: "Mona Jaafil",
            addressline: "6* Kingsbury St",
            city: "Dearborn Heights",
            state: "MI",
            zip: "48127",
            email: "m****@yahoo.com",
        },
        {
            firstname: "Pilar Valbuena Perez",
            addressline: "4* Minnisink Rd",
            city: "Wayne",
            state: "NJ",
            zip: "7470",
            email: "p****@optonline.net",
        },
        {
            firstname: "Mona Jaafil",
            addressline: "6* Kingsbury St",
            city: "Dearborn Heights",
            state: "MI",
            zip: "48127",
            email: "m****@yahoo.com",
        },
        {
            firstname: "Pilar Valbuena Perez",
            addressline: "4* Minnisink Rd",
            city: "Wayne",
            state: "NJ",
            zip: "7470",
            email: "p****@optonline.net",
        },
        {
            firstname: "Micheal Page",
            addressline: "1* Saddleridge Rd",
            city: "Columbia",
            state: "SC",
            zip: "29223",
            email: "m****@aol.com",
        },
        {
            firstname: "Mona Jaafil",
            addressline: "6* Kingsbury St",
            city: "Dearborn Heights",
            state: "MI",
            zip: "48127",
            email: "m****@yahoo.com",
        },
        {
            firstname: "Pilar Valbuena Perez",
            addressline: "4* Minnisink Rd",
            city: "Wayne",
            state: "NJ",
            zip: "7470",
            email: "p****@optonline.net",
        },
        {
            firstname: "Micheal Page",
            addressline: "1* Saddleridge Rd",
            city: "Columbia",
            state: "SC",
            zip: "29223",
            email: "m****@aol.com",
        },
        {
            firstname: "Luis Gabaldon",
            addressline: "5* Edge Hill Rd",
            city: "Sharon",
            state: "MA",
            zip: "2067",
            email: "m****@hotmail.com",
        }
    ])


    return (
        <div className="main-page">
            <Header />
            <Container className="under-header-container">


                <div className="main-text">
                    <p className="first-header">

                        Reach your ideal audience with
                    </p>
                    <p className="second-header">
                        TARGETED MARKETING LISTS
                    </p>
                    <p className="third-header">
                        Save time and money by connecting with the right people, the first time.
                    </p>
                </div>
                <Row className="countdown-form">
                    <Col  md={6} lg={5}  className="line-between">
                        <div className="wraper">
                            <h4>
                                15% OFF ENDS IN
                            </h4>
                            <Countdown
                                date={Date.now() + 500000000}
                                renderer={props =>
                                    <ul className="countdown-list">
                                        <li>
                                            <p className="countdown-number">{props.days}</p>
                                            <p className="countdown-title">Days</p>
                                        </li>
                                        <li>
                                            <p className="countdown-number">{props.hours}</p>
                                            <p className="countdown-title">Hours</p>

                                        </li>
                                        <li>
                                            <p className="countdown-number">{props.minutes}</p>
                                            <p className="countdown-title">Minutes</p>


                                        </li>
                                        <li>
                                            <p className="countdown-number">{props.seconds}</p>
                                            <p className="countdown-title">Seconds</p>

                                        </li>
                                    </ul>
                                }
                            />

                            <h4>
                                LOCK IN YOUR PRICING NOW
                            </h4>
                            <p className="small-line">
                                Zero commitment, 15% off ends soon. Certain exclusions may apply.
                            </p>
                           
    
                            <Button className="schedule-btn" onClick={() => setModalShow(true)}>
                                Schedule a call
                            </Button>
                            <Popup
        show={modalShow}
        setShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
    
                        </div>


                    </Col>
                    <Col md={6} lg={5} >
                        <div className="form-col">
                            <h3 className="quote">Instant Free Quote</h3>

                            <Form btnName="View Pricing" />
                        </div>
                        <OverlayTrigger
                            placement="left"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <img className="extract-overlay" src="https://www.exactdata.com/quote/templates/frontend/forms/images/betterbusinessbureau.png" />
                        </OverlayTrigger>
                    </Col>
                </Row>
                <p className="learn-more">Let us earn your business, learn more</p>
                <p className="arrow"><FiChevronsDown /></p>
            </Container>
            <div className="white-container">

                <p className="free-list">Free List Samples</p>
                <p className="intrested">Interested in a free sample? Fill out the form above to create an account and view samples like the one below.</p>
                <Container fluid className="table-container">
                    <Table className="table-extract" striped size="sm" responsive>
                        <thead>
                            <tr className="table-head">
                                <th>First Name</th>
                                <th>Address Line 1</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) => {
                                return (
                                    <tr key={index} className="table-values">
                                        <td className="first-name">{data.firstname}</td>
                                        <td>{data.addressline}</td>
                                        <td>{data.city}</td>
                                        <td>{data.state}</td>
                                        <td>{data.zip}</td>
                                        <td>{data.email}</td>
                                    </tr>

                                )
                            })}

                        </tbody>
                    </Table>
                </Container>
                <p className="link">Addresses last verified October 15, 2021. See <a href="">B2B CASS(TM) Summary Report</a></p>
                <Container >
                    <h1 className="best-view">The Best-Reviewed Targeted Lead Company</h1>
                    <Card />

                </Container>
                <Container fluid className="graph">
                    <h2>Save time and money by connecting with the right people, the first time.</h2>
                    <Row className="justify-content-center">
                        <Col lg={4} md={6}>
                            <img className="graph-img" src="https://www.exactdata.com/quote/templates/frontend/forms/images/graph-v1.svg" />
                        </Col>
                        <Col lg={5} md={6}>
                            <p className="graph-text">
                                Looking to buy an email list? You’ve come to the right place! Our top-quality, 100% CAN-SPAM compliant, custom targeted lists are guaranteed to provide you with the best value. We pride ourselves in making your marketing efforts easy and effective.
                                <ul>
                                    <li><span><TiTick /></span>100% customizable to fit your campaign</li>
                                    <li><span><TiTick /></span> Improve response rates, increase sales, and grow ad ROI</li>
                                    <li><span><TiTick /></span>  Over 75,000 combinations to build your ideal audience</li>
                                </ul>
                                Submit the form above to get instant access and free counts.
                            </p>
                        </Col>
                    </Row>

                </Container>
                <Container fluid className="consumer-contact">
                    <h2>230 Million Consumer Contacts and 69 Million Businesses Available.</h2>
                    <p>Enhance the quality of your data with ease. Make your marketing profitable with an engaged email list.</p>
                    <Row className="justify-content-center">
                        <Col lg={3} md={4}>
                            <span className="icon-span">
                                <MdOutlineEmail />
                            </span>
                            <h5>
                                CAN-SPAM COMPLIANT AND DELIVERABLE EMAIL ADDRESSES
                            </h5>
                            <p className="icon-text">
                                Build a fresh, 100% CAN-SPAM Compliant email list from our database of 230 million B2C and 69 million B2B contacts. All lists are validated prior to list turnover. We also deploy email campaigns from our whitelisted servers.
                            </p>
                        </Col>
                        <Col lg={3} md={4}>
                            <span className="icon-span">
                                <RiSendPlaneFill />
                            </span>
                            <h5>
                                CAN-SPAM COMPLIANT AND DELIVERABLE EMAIL ADDRESSES
                            </h5>
                            <p className="icon-text">
                                Build a fresh, 100% CAN-SPAM Compliant email list from our database of 230 million B2C and 69 million B2B contacts. All lists are validated prior to list turnover. We also deploy email campaigns from our whitelisted servers.
                            </p>
                        </Col>
                        <Col lg={3} md={4}>
                            <span className="icon-span">
                                <IoChatbubblesOutline />
                            </span>
                            <h5>
                                CAN-SPAM COMPLIANT AND DELIVERABLE EMAIL ADDRESSES
                            </h5>
                            <p className="icon-text">
                                Build a fresh, 100% CAN-SPAM Compliant email list from our database of 230 million B2C and 69 million B2B contacts. All lists are validated prior to list turnover. We also deploy email campaigns from our whitelisted servers.
                            </p>
                        </Col>
                    </Row>


                </Container>
                <Container fluid className="consumer-contact">
                    <h2>The Exact Data Difference</h2>
                    <Row className="extract-difference">
                        <Col md={4} className="icon-text-container">
                            <p className="icon-li" ><FaCrosshairs /></p>
                            <ul className="icon-ul">
                                <li className="icon-li-text">
                                    <h5>HIGHLY TARGETED AUDIENCES</h5>
                                    <p>Cut marketing costs by getting your messages in front of the right people.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} className="icon-text-container">
                            <p className="icon-li" ><BsCurrencyDollar /></p>
                            <ul className="icon-ul">
                                <li className="icon-li-text">
                                    <h5>COMPETITIVE PRICING </h5>
                                    <p>We will match any major competitor's price with discounts available based on order volume.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} className="icon-text-container">
                            <p className="icon-li" ><FaCogs /></p>
                            <ul className="icon-ul">
                                <li className="icon-li-text">
                                    <h5>SUPERIOR DATA HYGIENE</h5>
                                    <p>Our postal, telephone, and email contacts routinely go through a rigorous data hygiene process to ensure our data is accurate and up-to-date.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} className="icon-text-container">
                            <p className="icon-li" ><BsFillCloudArrowDownFill /></p>
                            <ul className="icon-ul">
                                <li className="icon-li-text">
                                    <h5>QUICK AND EASY FILE DELIVERY</h5>
                                    <p>Our secure client portal gives you access to your files anytime, anywhere.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} className="icon-text-container">
                            <p className="icon-li" ><BiLineChartDown /></p>
                            <ul className="icon-ul">
                                <li className="icon-li-text">
                                    <h5>SATISFACTION GUARANTEE</h5>
                                    <p>We will refund your money for any portion of your list that shows undeliverable, out-of-date, or disconnected.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} className="icon-text-container">
                            <p className="icon-li" ><FaMobileAlt /></p>
                            <ul className="icon-ul">
                                <li className="icon-li-text">
                                    <h5>24/7 CUSTOMER SUPPORT</h5>
                                    <p>We're always available to answer any questions you have via phone, email, or live chat.</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="footer-container">
                            <h2 className="create-account">Create An Account</h2>
                    <Row className="justify-content-center">
                        <Col lg={5} md={6}>
                            <Form btnName="Create An Account" />
                        </Col>
                        <Col lg={5} md={6}>
                            <h5>With a free account you can:</h5>
                            <ul>
                                    <li><span><TiTick /></span>Run real-time searches on 291 million consumers and 34 million businesses to see how many records are available</li>
                                    <li><span><TiTick /></span> Save your searches and purchase lists</li>
                                    <li><span><TiTick /></span> Get help from our experts via live chat, phone, or email</li>
                                    <li><span><TiTick /></span> and do much more!</li>
                                </ul>
                            <h5>Contact Us!</h5>
                            <ul className="address">
                                    <li><span><BsTelephoneFill /></span> 877.440.3282</li>
                                    <li><span><IoLocationSharp /></span> 1440 W. Taylor Street, #402 Chicago, IL 60607</li>
                                </ul>
                        </Col>
                    </Row>
                </Container>
                    <Container fluid className="rights" >
                        <p>Copyright © 2021. All rights reserved. |<a href="https://www.exactdata.com/privacy-policy.html" > Privacy Policy</a> |<a href="" > Contact Us </a> </p>
                    </Container>
            </div>
        </div>
    );
}

export default MainPage;