import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Tags = () => {
    const [tags,setTags] = useState([])

    const addTag = (event) => {
        if(event.target.value !== ''){
            setTags([...tags, event.target.value])
            event.target.value = ''
        }
    }

    const removeTag = (index) => {
        console.log(index);
        const newTags = tags.filter((_, currentIndex ) => {
            return index !== currentIndex
        })
        setTags([...newTags])
        console.log([newTags]);
    }

  return (
       <div className="">
        <label className='text-base sm:text-base text-right float-right font-semibold' htmlFor='skills'>مهارت ها</label>
      <div className="inline-flex mx-auto min-w-full text-sm border-4 my-2 rounded-md p-1">
        <input 
        onKeyUp={(event) => event.key === 'Enter' && addTag(event)}
        className='w-full border-none text-right outline-none border-2 text-sm sm:text-base border-gray-300'
        type='text' placeholder='مهارت های مورد نیاز برای وظیفه' />
        <ul className="inline-flex flex-wrap">
            {
                tags.map((item,index) => {
                   return <li className="flex flex-nowrap cursor-pointer items-center bg-blue-600 text-white text-center text-base px-1 m-1" 
                    key={index}
                    onClick={() => removeTag(index)}
                    ><span>{item}</span><span className="bg-blue-300 ml-2"><IoIosClose size={18} /></span></li>
                })
            }
        </ul>
      </div>
       </div>
  )
}

export default Tags
