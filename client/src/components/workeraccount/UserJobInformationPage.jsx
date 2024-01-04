import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControll from '../formik/FormikControll'
import { radioOptionforeducations,currentJobType,jobExp,gender, kindOfJobOptionsForCheckbox } from '../formik/FormValues'
import {useSelector} from 'react-redux'
import { IoIosEye,IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';
import {api} from '../../utils/api'

const UserJobInformationPage = () => {
  const [showPassword,setShowPassword] = useState(true)
  const phoneNumberData = useSelector((state) => state.phoneNumber)

  const initialValues = {
    name:'',
    lastName:'',
    city:'',
    currentLocation:'',
    job:'',
    userInformation:'',
    genderOfWorker:'', // gender
    educationLevel: '', // سطح تحصیل
    currentJob: '',
    jobExp: '',
    typeOfJob: [],
    phoneNumber:'',
    password:'',
    email:'',
    phoneNumber1:'',
    phoneNumber2:'',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("نام شما الذامی میباشد"),
    lastName: Yup.string().required("تخلص شما الذامی میباشد"),
    city: Yup.string().required("شهر شما الذامی میباشد"),
    job: Yup.string().required("وظیفه شما الذامی میباشد"),
    userInformation: Yup.string().required("لطفا درمورد خود بگین"),
    genderOfWorker: Yup.string().required("جنسیت شما الذامی میباشد"),
    phoneNumber1: Yup.string().required("شماره تماس یک"),
    email: Yup.string(),
    password: Yup.string().required("رمز مهم است فراموش نکنید"),
  })

  const onSubmit = async (values) => {
    values.phoneNumber = phoneNumberData?.phoneNumber
    // const sentToBackend = values.phoneNumber 
    try {
    const response = await api.post('/api/v1/user/signup',values)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='max-w-[450px] mx-auto'>
      <h1 className='text-center text-3xl border-b-2 mb-3 font-bold my-4'>
        ثبت نام برای کار های موجود
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='shadow-2xl border-t-2 p-4 rounded-lg'>
            <div>
                <FormikControll
                   controll='input'
                   label="نام"
                   name='name'
                   type='text'
                   id='name'
                   placeholder=' ثناوالله'
                />
                <FormikControll
                   controll='input'
                   label="تخلص"
                   name='lastName'
                   type='text'
                   id='lastName'
                   placeholder=' مبینی'
                />
                <FormikControll
                   controll='input'
                   label="ایمیل آدرس تان را وارد کنید"
                   name='email'
                   type='email'
                   id='email'
                   placeholder='example@gmail.com'
                />
                <FormikControll
                   controll='input'
                   label="شماره تماس یک"
                   name='phoneNumber1'
                   type='text'
                   id='phoneNumber1'
                   placeholder='0780000000'
                />
                <FormikControll
                   controll='input'
                   label="شماره تماس دو"
                   name='phoneNumber2'
                   type='text'
                   id='phoneNumber2'
                   placeholder='0799000000'
                />
                <div className='relative'>
                <FormikControll
                   controll='input'
                   label="رمز"
                   name='password'
                   type={showPassword ? `password` : 'text'}
                   id='password'
                   placeholder='هر چی دوست داری بزن'
                />
                <button
                onClick={() => setShowPassword(!showPassword)}
                className='text-xl absolute top-12 left-4'>{
                  showPassword ?<IoIosEye />:<IoMdEyeOff/>
                }                 
                  </button>
                </div>
                <FormikControll
                   controll='input'
                   label="ولایت"
                   name='city'
                   type='text'
                   id='city'
                   placeholder='هرات'
                />
                <FormikControll
                   controll='input'
                   label="موقعیت شما"
                   name='currentLocation'
                   type='text'
                   id='currentLocation'
                   placeholder='شهر نو'
                />
                <FormikControll
                   controll='input'
                   label=" وظیقه شما"
                   name='job'
                   type='text'
                   id='job'
                   placeholder=' حسابدار یا نجار'
                />
            {/* about the job */}
            {/* <div className='flex border-t-2 flex-col my-3 mx-1 shadow-2xl p-4 rounded-xl bg-white'> */}
                <FormikControll
                    controll='textarea'
                    name='userInformation' 
                    label='درمورد خودتان'
                    placeholder='درمورد خودتان ینویسید'
                    id='userInformation'
                />
            {/* </div> */}
            {/* about the job */}


                <FormikControll
                   controll='radio'
                   label="جنسیت"
                   name='genderOfWorker'
                   options={gender}
                />
                <FormikControll
                   controll='select'
                   label="سطح تحصیل"
                   name='educationLevel'
                   options={radioOptionforeducations}
                />
                <FormikControll
                   controll='radio'
                   label="وظیفه شما"
                   name='currentJob'
                   options={currentJobType}
                />
                <FormikControll
                   controll='radio'
                   label="تجربه کاری"
                   name='jobExp'
                   options={jobExp}
                />
                <FormikControll
                   controll='checkbox'
                   label="روش کاری شما"
                   name='typeOfJob'
                   options={kindOfJobOptionsForCheckbox}
                />
                
            </div>
          <button
            type='submit'
            className='bg-yellow-400 text-gray-900 font-semibold sm:font-bold sm:text-lg shadow-lg w-full my-5 py-2 rounded-xl'
          >
            درست کردن حساب
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserJobInformationPage