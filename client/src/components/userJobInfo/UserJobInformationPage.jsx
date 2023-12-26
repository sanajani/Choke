import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControll from '../formik/FormikControll'
import { radioOptionforeducations,currentJobType,jobExp,gender, kindOfJobOptionsForCheckbox } from '../formik/FormValues'

const UserJobInformationPage = () => {


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
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("نام شما الذامی میباشد"),
    lastName: Yup.string().required("تخلص شما الذامی میباشد"),
    city: Yup.string().required("شهر شما الذامی میباشد"),
    job: Yup.string().required("وظیفه شما الذامی میباشد"),
    userInformation: Yup.string().required("لطفا درمورد خود بگین"),
    genderOfWorker: Yup.string().required("جنسیت شما الذامی میباشد"),
  })

  const onSubmit = (values) => {
    // alert('hello')
    console.log(values);
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
