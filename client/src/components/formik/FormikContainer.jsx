import {
    Formik,Form
} from 'formik'
import * as Yup from 'yup'
import FormikControll from './FormikControll'

const FormikContainer = () => {
    const initialValues = {
        email:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Email field is required").email("Enter a valid Email")
    })    
    const onSubmit = () => console.log('hello')
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
        {
            () => <Form>
                <FormikControll 
                control='input' 
                type='email' 
                label='E-mail' 
                name='email' />
                <button type='submit'>Submit</button>
            </Form>
        }
    </Formik>
  )
}

export default FormikContainer