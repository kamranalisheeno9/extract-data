import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import { Row, Col, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
const FormPage = (props) => {
    const [validated, setValidated] = useState(false);

    
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="form-container">
            <Form className="form-validate" noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col sm={6}>
                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Label className="label">First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>

                        <Form.Group md="4" controlId="validationCustom02">
                            <Form.Label className="label">Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Label className="label">Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Label className="label">Phone Number</Form.Label>
                            <Form.Control
                                required
                                type="tel"
                                placeholder="+1"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                      event.preventDefault();
                                    }
                                  }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={12}>
                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Label className="label">Who is your ideal audience?</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tell us more about what you are loking for ..." />
                        </Form.Group>

                    </Col>
                </Row>


                <Button type="submit" className="view-pricing">{props.btnName} <span> <BsArrowRight /> </span> </Button>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="check-box" disabled type="checkbox" label="Exact Data has permission to contact me with information related to this service." />
                </Form.Group>
            </Form>
        </Container>
    );
}

export default FormPage;