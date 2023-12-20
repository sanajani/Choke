import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import heroImage from '../images/hero.svg';
import { useDispatch } from 'react-redux'
import {
    signinValidationSchema,
    initialSigninValues,
} from '../utils/validationSchemas/validationSchema';

import {Formik, Form, Field, ErrorMessage} from 'formik'
import {api} from '../utils/api'

import { Link, useNavigate } from 'react-router-dom'
import { setToken } from '../redux/features/tokenSlice';
import ErrorText from '../components/ErrorText';

const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const sendUserData = async (values) => {
            try {
                const response = await api.post(`/api/v1/user/signin`,values)
                const userToken = response?.data?.data
                console.log(response.data);
                dispatch(setToken(userToken))
                navigate('/')
                toast.success('🦄 Login Successfull !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } catch (error) {
                console.log(error?.response?.data);
                toast.error(`🦄 ${error?.response?.data?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
    

  return (
    <>
    <Formik 
    initialValues={initialSigninValues}
    validationSchema={signinValidationSchema}
    onSubmit={sendUserData}
    >
        <div className='flex justify-center h-screen items-center gap-4'
        >
        <div className='flex bg-gray-300 p-4 rounded-lg w-[100%] md:w-auto mx-6 md:mx-0'>
        <div className="hidden md:flex w-96  md:flex-col md:justify-between md:items-start">
            <img className="object-cover w-full mt-10" src={heroImage} alt="Hello" />
            <Link className='mt-12 text-gray-900 text-lg underline' to={ '/signup'}>{"don't have an accoutn"}</Link>
        </div>
        <Form className="bg-gray-100 mx-auto py-6 md:py-0 w-full md:w-96 flex flex-col rounded-md">
            <h1 className='text-center my-2 text-xl md:text-3xl font-semibold'>Login</h1>

            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="email">Email:</label>
                <Field type="email" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Email...'
                    id='email'
                    name='email'
                />
                <ErrorMessage name='email' component={ErrorText}  />
            </div>
            <div className='flex flex-col gap-1 my-2 px-2'>
                <label className='md:text-xl sm:text-lg text-base' htmlFor="password">Password:</label>
                <Field type="password" className='md:p-2 p-1 md:text-xl sm:text-lg text-base' placeholder='Password...'
                    id='password'
                    name='password'
                    />
                <ErrorMessage name='password' component={ErrorText} />
            </div>
            <button type='submit' className='bg-blue-500 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>Sign In</button>
            <div type='submit' className='cursor-pointer bg-red-500 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>Sign In with google</div>
            <div type='submit' className='cursor-pointer bg-blue-700 text-base sm:text-xl p-1 md:p-3 rounded-md text-white mx-1 md:mx-3 my-2 md:my-3'>Sign In with facebook</div>
            <Link className='md:hidden mt-2 px-2 text-gray-900 text-base md:text-xl underline' to={ '/signup'}>{"don't have an account"}</Link>
        </Form>
        </div>
        </div>
    </Formik>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  )
}

export default Signin
