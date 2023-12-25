/* eslint-disable react/prop-types */
import {Field} from 'formik'

const FormikRadioButton = (props) => {
    const {name, label, options, ...rest} = props

  return (
    <div className='text-right'>
        <label htmlFor={name}
        className='text-right my-2 text-sm font-semibold block sm:text-base'
        >{label}</label>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                  return <div className='flex  flex-wrap justify-end'>
                     {
                     options.map((option) => {
                        return (
                            <div key={option.value} className='mx-3 my-1 w-[40%]'>
                                 <label htmlFor={option.value}
                                className='text-right text-base mx-1' 
                                 >{option.key}
                                 </label>
                                <input 
                                    type="radio"
                                    {...field}
                                    id={option.value}
                                    value={option.value}
                                    checked={field.value === option.value}
                                 />
                            </div>
                        )
                    })}
                  </div>
                }
            }
        </Field>
    </div>
  )
}

export default FormikRadioButton