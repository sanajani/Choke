/* eslint-disable react/prop-types */
import ErrorText from '../ErrorText'

import { ErrorMessage, Field } from "formik"

const Input = (props) => {
    const {label, name, ...rest} = props
  return (
    <div >
        <label htmlFor={name}>{label}</label>
        <Field 
            id={name}
            name={name}
            {...rest}
        />
        <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default Input