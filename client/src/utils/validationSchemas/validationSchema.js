import * as Yup from 'yup'

export const signinValidationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
})


export const initialSigninValues = {
    email: '',
    password: ''
}