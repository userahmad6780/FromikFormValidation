import React from 'react'
import { Field, ErrorMessage } from 'formik';
import ErrorMsg from '../../components/ErrorMsg';

function Input(props) {
    const {name, placeholder, ...rest} = props
  return (
    <div>
        <Field className="border_sm" name={name} {...rest} placeHolder={placeholder}/>
        <ErrorMessage name={name} component={ErrorMsg} />
    </div>
  )
}

export default Input