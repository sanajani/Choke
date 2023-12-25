/* eslint-disable react/prop-types */
import {Field, ErrorMessage} from 'formik'
import ErrorText from '../ErrorText'

const FormikInput = (props) => {
    const {name, label,left, ...rest} = props
  return (
    <div className='flex flex-col my-3 mx-1'>
    <label
        htmlFor={name}
        className='text-right my-2 text-sm font-semibold sm:text-base'
    >
        {label}
    </label>
    <Field
        id={name}
        name={name}
        className={`${left ? 'text-left' : 'text-right'} outline-none border-2 p-1 text-sm sm:text-base border-gray-300`}
        {...rest}      
    />
    <ErrorMessage component={ErrorText} name={name} />
    </div> 
  )
}

export default FormikInput