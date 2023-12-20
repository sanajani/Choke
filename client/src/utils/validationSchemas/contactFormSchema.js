import * as Yup from 'yup'

export const commentSchema = Yup.object({
    name: Yup.string().required("Name Field is required"),
    email: Yup.string().required("Email Field is required").email(),
    comment: Yup.string().required("Comment is required"),
})

export const commentInitialValue = {
    name:"",
    email:"",
    comment:""
}