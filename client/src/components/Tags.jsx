import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Tags = () => {
    const [tags,setTags] = useState(['hi','2','4'])

    const addTag = (event) => {
        if(event.target.value !== ''){
            setTags([...tags, event.target.value])
            event.target.value = ''
        }
    }

    const removeTag = (index) => {
        console.log(index);
        const newTags = tags.filter((value, currentIndex ) => {
            return index !== currentIndex
        })
        setTags([...newTags])
        console.log([newTags]);
    }

  return (
      <div className="inline-flex mx-auto min-w-full text-sm border-4 my-5 rounded-md px-1">
        <input 
        onKeyUp={(event) => event.key === 'Enter' && addTag(event)}
        className="w-full border-none outline-none" 
        type='text' placeholder='Enter your tags' />
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
  )
}

export default Tags
