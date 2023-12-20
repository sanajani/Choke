import { useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import mapImage from '../images/map1.jpg'
import { commentSchema, commentInitialValue } from '../utils/validationSchemas/contactFormSchema'
import ErrorText from '../components/ErrorText'
import { api } from '../utils/api'
import {ToastContainer, toast} from 'react-toastify'

const Contact = () => {
  const [iframeError, setIframeError] = useState(false)
  const [isEmailSending, setisEmailSending] = useState(false)

  const sentEmails = async (values,resetForm) => {
    setisEmailSending(true)
    try {
    const response = await api.post('/api/v1/mail/sendmail',values)
    toast.success(`${response?.data?.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setisEmailSending(false)
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }finally{
      resetForm()
      setisEmailSending(false)
    }
  }

  return (
    <div className=''>
      <section >
        {!iframeError ? (
          <iframe
          className='w-full max-h-64'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52702.087584406145!2d62.16987037743436!3d34.353519960227345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce6a894be6cf7%3A0x9db9f81752d677c4!2sHerat%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1702302692054!5m2!1sen!2s'
            width='500'
            height='400'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            onError={() => setIframeError(true)}
          ></iframe>
        ) : (
          <img className='max-h-64 w-full object-cover' src={mapImage} alt='' />
        )}
      </section>
      <Formik className='flex bg-gray-300 p-4 rounded-lg w-[100%]'
      initialValues={commentInitialValue}
      validationSchema={commentSchema}
      onSubmit={(values,{resetForm}) =>sentEmails(values, resetForm)}
      >
        <Form className='bg-gray-100 mx-auto py-6 md:py-0 w-[80%] flex flex-col rounded-md'>
          <h1 className='text-center text-xl md:text-3xl font-semibold'>
            Contact Us
          </h1>
          <div className='flex flex-col gap-1 my-2 px-2'>
            <label className='md:text-xl sm:text-lg text-base' htmlFor='name'>
              Name:
            </label>
            <Field
              type='text'
              name='name'
              className='md:p-2 p-1 md:text-xl sm:text-lg text-base'
              placeholder='Name...'
            />
            <ErrorMessage name='name' component={ErrorText}/>
          </div>
          <div className='flex flex-col gap-1 my-2 px-2'>
            <label className='md:text-xl sm:text-lg text-base' htmlFor='email'>
              Email:
            </label>
            <Field
            name='email'
              type='email'
              className='md:p-2 p-1 md:text-xl sm:text-lg text-base'
              placeholder='Email...'
            />
            <ErrorMessage name='email' component={ErrorText}/>

          </div>
          <div className='flex flex-col gap-1 my-2 px-2'>
            <label
              className='md:text-xl sm:text-lg text-base'
              htmlFor='textarea'
            >
              Message:
            </label>
            <Field
            as='textarea'
            name='comment'
              className='md:p-2 p-1 md:text-xl sm:text-lg text-base'
              placeholder='Message...'
            />
            <ErrorMessage name='comment' component={ErrorText}/>
          </div>
          <button
          disabled={isEmailSending}
          type='submit'
           className={` disabled:bg-gray-400 disabled:text-black disabled:cursor-wait  bg-blue-500 text-white text-base sm:text-xl p-1 md:p-3 rounded-md  mx-1 md:mx-3 my-2 md:my-3 `} >
            Contact Me
          </button>
        </Form>
      </Formik>
      < ToastContainer/>
    </div>
  )
}

export default Contact
