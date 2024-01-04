// import { api } from "../utils/api"
// import { useState,useEffect } from "react"

const JobSecers = () => {
    // const [data,setData] = useState([])
    // const getJobSecers = async () => {
    //     try {
    //         const res = await api.get('/api/v1/user/users?page=1&job=&province=')
    //         setData(res.data?.data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     getJobSecers()
    // },[])
    // console.log(data);
    const data = [
        {id : 11},
        {id : 12},
        {id : 13},
        {id : 14},
        {id : 15},
    ]
  return (
    <div className="">
        <div className="max-w-[1100px] mx-auto p-4 mt-2 rounded-lg flex flex-col items-end text-right">
        {
        data.map((jobSecer) => {
            return (
                <div key={jobSecer._id} className="my-3 rounded-lg bg-gray-50 shadow-xl border-t-2 max-w-full w-[700px] px-5">
                    <h1 className="font-bold text-base sm:text-lg text-blue-800 md:text-2xl">برنامه نویس تحت ویب</h1>
                <span className="text-[12px] underline">هرات</span>
                    <p className="text-sm">
                    به یک برنامه نویس ماهر در قسمت ویب ضرورت داریم
                    به یک برنامه نویس ماهر در قسمت ویب ضرورت داریم
                    به یک برنامه نویس ماهر در قسمت ویب ضرورت داریم                            
                    </p>
                    <div className="flex text-[12px] underline gap-2 justify-end py-3">
                        <span>دو سال</span>
                        <span>دری</span>
                        <span>برنایی</span>
                        <span>برنامه</span>
                        </div>
                </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default JobSecers