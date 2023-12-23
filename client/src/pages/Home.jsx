import SearchAndPlace from '../components/homepagecomponents/SearchAndPlace'
import Button from '../components/Button'
import { IoIosArrowDown } from 'react-icons/io'
import FindJobHomePageComponent from '../components/homepagecomponents/FindJobHomePageComponent'

const Home = () => {
  return (
    <main className=' min-w-full'>
      <div className=' mx-auto py-20'>
        <div className='w-full flex flex-col '>
          <h1 className='text-center font-bold my-4 text-4xl sm:text-5xl md:text-8xl'>
            کار و پول
          </h1>
          <p className='md:my-5 mx-auto font-semibold md:font-bold md:text-xl'>
            موتور جستجوی فرصت‌های شغلی افغانستان
          </p>
        </div>
        <div className='w-[90%] mx-auto'>
        <SearchAndPlace />
        </div>
        <Button
          text='جستجو فرصت های شغلی'
          style='block text-center mx-auto bg-yellow-300 transition-all hover:bg-gray-600 hover:text-yellow-300 font-bold mt-5 px-4 py-1 rounded-xl '
        />
        <div className=' bg-gray-100 mt-12 py-6 rounded-md'>
          <p className='text-center py-2 font-semibold text-base sm:text-lg md:text-xl'>
            خدمات بررسی اولیه و جذب نیرو جهت استخدام
          </p>
          <Button
            text='بخش کارفرمایان'
            style='block text-center mx-auto bg-gray-600 text-white font-bold mt-5 px-6 py-2 rounded-xl '
          />
        </div>
        <div
        className='mx-auto my-12 cursor-pointer flex justify-center w-fit p-2 rounded-full border-2 border-gray-500 font-bold '>
          <IoIosArrowDown />
        </div>
        <div className='w-full  bg-gray-100 py-3'>
          <div className='w-full md:max-w-[850px] 100 mx-auto flex justify-between flex-col md:flex-row'>
            <FindJobHomePageComponent
            text='قصد استخدام داری؟'
            buttontext='اینجا آگاهی ثبت نام کن'
            buttonStyle='border md:mb-5 mb-3 w-full rounded-full border-gray-500 py-2 bg-white bg-red-200 font-semibold'
            divStyle='px-4 py-2  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white md:w-[350px] rounded-xl'
            pText='از خدمات ما برای استخدام نیروی جدید استفاده کن'
            />
            <FindJobHomePageComponent
            pText=' به سادگی با جواب دادن چند سوال صاحب رزومه شو'
            text='دنبال کار می گردی؟'
            buttontext='اینجا ثبت نام کن'
            buttonStyle='border md:mb-5 mb-3 w-full rounded-full border-gray-500 py-2 bg-white bg-red-200 font-semibold'
            divStyle='px-4 py-2  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white md:w-[350px] rounded-xl'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
