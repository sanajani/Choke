import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from 'react';
import { useSelector } from 'react-redux'

// bg-red 
const Nav = () => {
    const workerInformation = useSelector((state) => state.user)

    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav className={`py-2 text-white text-left bg-blue-500 shadow-md flex justify-between items-center px-2 relative`}>
        <div className='flex h-full items-center mx-10 gap-10'>
            {
                <h1 className='text-white text-lg font-bold capitalize hover:bg-yellow-500 cursor-pointer'>
                    {workerInformation?.user && workerInformation?.user?.name}
                </h1>
            }
            <Link
            className='text-sm bg-blue-900 px-5 py-2 rounded-full text-white font-semibold  hover:bg-gray-800 transition-all hover:text-yellow-500'
             to='/hire-form'
            >  {workerInformation?.user? "بخش کارفرمایان" : 'ثبت آگاهی استخدام '}
            </Link>
        </div>
        <div className='flex items-center gap-3'>
            <Link to='/'>
            <FaSearch/>
            </Link>
            <span className='cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
            >
                <AiOutlineMenu size={28} />
            </span>
        </div>
        <div className={`${menuOpen ? 'w-[300px]' : 'w-0'} shadow-xl bg-gray-50 right-0 z-50 absolute top-0 h-screen transition-all flex flex-col items-end overflow-hidden`}>
            <div className='bg-gray-200 w-full'>
            <span className='border-2 font-bold border-black cursor-pointer inline-block m-3 rounded-full text-black p-1 float-right' 
            onClick={() => setMenuOpen(!menuOpen)}
            >
                <AiOutlineClose size={24}  />
            </span>
            </div>
            <ul className='mt-6 px-4 text-right flex flex-col items-end w-full'>
                <li className='my-4 px-4  font-semibold border-b-2 pb-2'><Link className='flex items-center gap-2'>فرصت‌های شغلی <FaSearch /></Link></li>
                <li className='my-4 px-4 font-semibold border-b-2 pb-2'><Link to='/worker-account' className='flex items-center gap-2'>ثبت رزومه<IoMdPersonAdd /></Link></li>
                <li className='my-4 px-4 font-semibold border-b-2 pb-2'><Link to='/hire-form' className='flex items-center gap-2'>ثبت آگاهی استخدام <FaPlusSquare /></Link></li>
                <li className='my-4 px-4 font-semibold border-b-2 pb-2'><Link className='flex items-center gap-2'>ورود به پنل <IoPersonSharp /></Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav