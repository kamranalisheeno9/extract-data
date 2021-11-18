import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import { Row, Col, Container, Button, Form, InputGroup } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { Formik,ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextField from './textFieldForm'
import TextFieldPhone from './textFieldPhone'

const FormPage = (props) => {

    const Schema = yup.object().shape({
        firstName: yup.string()
            .required('This field is required'),
        lastName: yup.string()
            .required('This field is required'),
        phone: yup.string()
            .required('Email must be valid'),
        email: yup.string().email('Email must be valid').required('Email must be valid'),
    });

  

    return (
        <Container className="form-container">

              <Formik
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        phone: '',
                                    }}

                                    onSubmit={values => {
                                        console.log("Form Data", values)

                                    }}
                                    validationSchema={Schema}
                                >

                                    {formik => (
                              <Form onSubmit={formik.handleSubmit} className="form-validate">
                                           <div className="form-inputs">
                                                <div className="right">

                                                    <TextField label="First Name *" type="text" name="firstName" placeholder="First Name" />
                                                </div>
                                                <div className="left">
                                                    <TextField label="Last Name *" type="text" name="lastName" placeholder="Last Name" />
                                                </div>

                                            </div>
                                            <TextField label="Email *" type="text" name="email" placeholder="Email" />
                                            <TextFieldPhone label="Phone *" type="tel" name="phone" placeholder="+1" />

                                            
                                            <Form.Group md="4" className="mb-3" controlId="validationCustom01">
                                          <Form.Label className="label">Who is your ideal audience?</Form.Label>
                                          <Form.Control as="textarea" rows={3} placeholder="Tell us more about what you are loking for ..." />
                                      </Form.Group>
                                      <Button type="submit" className="view-pricing">{props.btnName} <span> <BsArrowRight /> </span> </Button>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                  <Form.Check className="check-box" disabled type="checkbox" label="Exact Data has permission to contact me with information related to this service." />
                              </Form.Group>
                            
                          </Form>
                                    )}
                                </Formik>
            
        </Container>
    );
}

export default FormPage;