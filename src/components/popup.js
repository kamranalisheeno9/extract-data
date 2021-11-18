import React, { useState, useMemo } from 'react';
import './popup.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TextField from './textField'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, Dropdown, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { BsFillCircleFill, BsPlusCircleFill } from "react-icons/bs";
import { RiArrowRightSFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { ImArrowLeft2 } from "react-icons/im";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiFillClockCircle, AiFillCalendar } from "react-icons/ai";
import ReactDOM from "react-dom"
import TimezoneSelect from "react-timezone-select"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Popup(props) {
    const [date, setDate] = useState(new Date());
    const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const timings = ["12:00am", "1:00am", "1:30am", "2:00am", "2:30am", "3:00am", "3:30am", "4:00am", "4:30am", "5:00am", "5:530am", "8:00pm", "8:30pm", "9:00pm", "9:30pm", "10:00pm", "10:30pm", "11:00pm", "11:30pm"]

    const timingsAdded = ["12:15am", "1:15am", "1:45am", "2:15am", "2:45am", "3:15am", "3:45am", "4:15am", "4:45am", "5:15am", "5:45am", "8:15pm", "8:45pm", "9:15pm", "9:45pm", "10:15pm", "10:45pm", "11:15pm", "11:45pm"]

    const [phone, setphone] = useState()


    const [activeItem, setActiveItem] = useState(-1);


    const handleActive = (index) => {
        setActiveItem(index)
    }

    const Schema = yup.object().shape({
        firstName: yup.string()
            .required('Can not be blank'),
        lastName: yup.string()
            .required('Can not be blank'),
        email: yup.string().email('Invalid email').required('Can not be blank'),
    });


    const [confirmDisplay, setConfirmDisplay] = useState(false)
    const [guestDisplay, setGuestDisplay] = useState(false)
    const [calendarDisplay, setCalendarDisplay] = useState(false)
    const [showtime, setShowtime] = useState(false)
    const [formDisplay, setFormDisplay] = useState(false)
    const [eventData, setEventData] = useState({})
    const sendData = (time, index) => {
        const data = {
            intitalTime: time,
            endTime: timingsAdded[index],
            day: days[date.getDay()],
            month: monthNames[date.getMonth()],
            date: date.getUTCDate() + 1,
            year: date.getUTCFullYear(),
        }
        setFormDisplay(true)
        setEventData(data)
        console.log(eventData)
    }

    const cancelFunc = () => {
        setConfirmDisplay(false)
        setCalendarDisplay(false)
        props.setShow(false)

    }

    const onChange = (date) => {
        setDate(date)
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop={confirmDisplay ? "static" : "dynamic"}
        >

            <Modal.Body className="popup-body">
                <div className={confirmDisplay ? "except-confirm-hide" : "except-confirm-show"}>
                    <div className={calendarDisplay ? "extract-box-hide" : "extract-box"}>
                        <div className="top-text">
                            <h6>Exact Data powered by Data Axle USA</h6>
                            <p>
                                Welcome to our scheduling page. Please follow the instructions to add an event to our calendar.
                            </p>
                        </div>
                        <div className="consult" onClick={() => setCalendarDisplay(true)}>
                            <h5> <BsFillCircleFill className="circle" /> Exact Data Consult <span className="consult-arrow"><RiArrowRightSFill /></span> </h5>
                            <p className="consult-p">Lorem Ipsum  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only...</p>
                        </div>
                    </div>
                    <div className={calendarDisplay ? "calender-popup-display" : "calender-popup"}>
                        <Row className={formDisplay ? "justify-content-center calender-hide" : "justify-content-center"}>
                            <Col lg={5} md={9} className="left-container">
                                <div className="img-div">
                                    <span className="back-arrow" onClick={() => setCalendarDisplay(false)}><ImArrowLeft2 /></span>
                                    <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/organization/logo/11941793/f6371838.png" />
                                </div>
                                <div className="data-consultant">
                                    <h6>Exact Data powered by Data Axle USA</h6>
                                    <h4>Exact Data Consult</h4>
                                    <h6> <span> <AiFillClockCircle /> </span> 15 min</h6>
                                    <p>One of our experienced data experts will give you a call at the time you select for your consult. During your 15-minute consult, they will ask you a few questions related to your ideal audience and help you find the best lead list possible for your business.</p>
                                </div>
                            </Col>
                            <Col lg={7} md={9} className="right-container">
                                <Row>
                                    <Col   lg={12} md={12}>
                                        <div className="calender-display">
                                        <div className="select-date">
                                        <h5 className="select-date-text">Select a Date and Time.</h5>
                                        <div className="calender-container">
                                            <Calendar
                                                onClickDay={() => setShowtime(true)}
                                                onChange={onChange}
                                                value={date}
                                            />


                                        </div>
                                        <div className="time-zone-selector">
                                            <div className="select-wrapper time-flex ">
                                                <span><FaGlobeAmericas /></span>

                                                <TimezoneSelect
                                                    value={selectedTimezone}
                                                    onChange={setSelectedTimezone}
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div  className={showtime ? "display-time" : "hide-time"}>
                                            <p> {days[date.getDay()]}, {monthNames[date.getMonth()]} {date.getUTCDate()}</p>
                                            <div className="timing-list" >
                                                {timings.map((time, index) => {
                                                    return (
                                                        <div key={index} className="time-btn-container" onClick={() => handleActive(index)} >
                                                            <div className={activeItem === index ? "time-btn-active" : "time-btn"} >{time}</div>
                                                            <div className={activeItem === index ? "time-confirm show-confirm" : "time-confirm hide-time "} onClick={() => sendData(time, index)} >Confirm</div>
                                                        </div>

                                                    )
                                                })}
                                        </div>
                                    </div>
                                    </div>
                                    </Col>
                                    
                                </Row>

                            </Col>

                        </Row>
                        <Row className={formDisplay ? "justify-content-around form-show" : "justify-content-around form-hide "}>
                            <Col lg={4} md={9} className="left-container">
                                <div className="img-div">
                                    <span className="back-arrow" onClick={() => setFormDisplay(false)}><ImArrowLeft2 /></span>
                                    <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/organization/logo/11941793/f6371838.png" />
                                </div>
                                <div className="data-consultant">
                                    <h6>Exact Data powered by Data Axle USA</h6>
                                    <h4>Exact Data Consult</h4>
                                    <h6> <span> <AiFillClockCircle /> </span> 15 min</h6>
                                    <p className="event-show"><span><AiFillCalendar /></span> {eventData.intitalTime} - {eventData.endTime}, {eventData.day}, {eventData.month}, {eventData.date}, {eventData.year} </p>
                                    <p className="event-show"><span><FaGlobeAmericas /></span> {JSON.stringify(selectedTimezone.altName + selectedTimezone.label, null, 2)} </p>
                                </div>
                            </Col>
                            <Col lg={7} md={9} className="">
                                <h5>Enter Details</h5>

                                <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                    }}

                                    onSubmit={values => {
                                        setConfirmDisplay(true)
                                        setFormDisplay(false)
                                        console.log("Schedule Form Data", values)

                                    }}
                                    validationSchema={Schema}
                                >

                                    {formik => (
                                        <Form onSubmit={formik.handleSubmit} >
                                            <div className="form-inputs">
                                                <div className="right">

                                                    <TextField label="First Name *" type="text" name="firstName" placeholder="First Name" />
                                                </div>
                                                <div className="left">
                                                    <TextField label="Last Name *" type="text" name="lastName" placeholder="Last Name" />
                                                </div>

                                            </div>
                                            <TextField label="Email *" type="text" name="email" placeholder="Email" />
                                            <div className={guestDisplay ? "guest-hide" : "guest-btn guest-show"} onClick={() => setGuestDisplay(!guestDisplay)}>Add Guests</div>
                                            <Form.Group className={guestDisplay ? " guest-show mt-2" : " guest-hide mt-2"} controlId="exampleForm.ControlTextarea1">
                                                <Form.Label className="label-form" >Guest Email(s)</Form.Label>
                                                <Form.Control className="popup-modal-input" as="textarea" rows={2} />
                                                <Form.Text className="text-muted">
                                                    Notify up to 10 additional guests of the scheduled event.
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mt-2 mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label className="label-form" >Phone *</Form.Label>

                                                <PhoneInput
                                                    placeholder="Enter phone number"
                                                    value={phone}
                                                    defaultCountry="PK"
                                                    onChange={setphone} />

                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label className="label-form">Please share anything that will help prepare for our meeting.</Form.Label>
                                                <Form.Control className="popup-modal-input" as="textarea" rows={2} />
                                            </Form.Group>
                                            <Button type="submit" className="textfield-btn"  >Schedule Event</Button>
                                        </Form>
                                    )}
                                </Formik>

                            </Col>

                        </Row>
                    </div>
                </div>

                <Container className={confirmDisplay ? "confirm-container-show" : "confirm-container-hide"}>
                    <h6 className="close-confirm" onClick={() => cancelFunc()}>
                        <AiOutlineClose />

                    </h6>

                    <div className="confirm-text">
                        <h4>Confirmed</h4>
                        <p>You are scheduled with Exact Data .</p>
                        <Dropdown
                            key="down"
                            id={`dropdown-button-drop-down`}
                            drop="down"
                            className="drop-down"
                        >
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-down-btn">
                                <span><BsPlusCircleFill /></span> Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="shadow">
                                <Dropdown.Item href="#/action-1">Google</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Outlook</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="final-data">
                        <h5> <BsFillCircleFill className="circle" /> Exact Data Consult</h5>
                        <p className="event-show"><span><AiFillCalendar /></span> {eventData.intitalTime} - {eventData.endTime}, {eventData.day}, {eventData.month}, {eventData.date}, {eventData.year} </p>
                        <p className="event-show"><span><FaGlobeAmericas /></span> {JSON.stringify(selectedTimezone.altName + selectedTimezone.label, null, 2)} </p>
                    </div>

                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default Popup;