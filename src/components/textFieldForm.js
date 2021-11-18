import { useField, ErrorMessage } from 'formik';
import React from 'react';
import './popup.css'
import { Form } from 'react-bootstrap'
const TextField = ({ ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div className="textfield-container" >
      
            <Form.Group  controlId="formBasicPassword" >
                <Form.Label className="label">{props.label}</Form.Label>
                <Form.Control type="text" name={props.name} placeholder={props.name}
                    {...field} {...props}
                    autoComplete="off"
                    className={`form-control shadow-none  ${meta.touched && meta.error && 'is-invalid'}`}
                />
                <div className="error" >
                <ErrorMessage  name={field.name} />
            </div>
            </Form.Group>

        </div>
    );
}

export default TextField;