// import { api } from "../utils/api"
// import { useState,useEffect } from "react"

import { Link } from "react-router-dom"

const JobSecers = () => {
  const data = [{
    id: 11,
    name:'sana',
    province:'herat',
    userInformation: 'hello world this is job kind of all the find',
    jobExp: '2 years',
    typeOfJob: ['one','two','three','four','five'],
    job:'Doctor'
 },
 {
    id: 14,
    name:'sana',
    province:'herat',
    userInformation: 'hello world this is job kind of all the find',
    jobExp: '2 years',
    typeOfJob: ['one','two','three','four','five'],
    job:'Doctor'
 },
 {
    id: 13,
    name:'sana',
    province:'herat',
    userInformation: 'hello world this is job kind of all the find',
    jobExp: '2 years',
    typeOfJob: ['one','two','three','four','five'],
    job:'Doctor'
 },
 {
    id: 12,
    name:'sana',
    province:'herat',
    userInformation: 'hello world this is job kind of all the find',
    jobExp: '2 years',
    typeOfJob: ['one','two','three','four','five'],
    job:'Doctor'
 },
]
  return (
    <div className=''>
      <div className='max-w-[1100px] mx-auto p-4 mt-2 rounded-lg flex flex-col items-end text-right'>
        {data.map(jobSecer => {
          const {id, name, province, userInformation, jobExp, typeOfJob ,job } = jobSecer
            jobSecer
          return (
            <Link to={`/userprofile/:${id}`}
              key={jobSecer._id}
              className='my-3 rounded-lg bg-gray-50 shadow-xl border-t-2 max-w-full w-[700px] px-5'
            >
              <h1 className='font-bold text-base sm:text-lg text-blue-800 md:text-2xl'>{`سلام من ${name} جان استم و من یک ${job} استم`}</h1>
              <span className='text-[12px] underline'>{`${province}`}</span>
              <p className='text-sm'>{`${userInformation}`}</p>
              <span className="text-sm">{`${jobExp}`}</span>
              <div className=''>
                {
                    typeOfJob.map((id,element) => {
                        return <span className="text-right mx-3 text-sm" key={id}>{typeOfJob[element]}</span>
                    })
                }
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default JobSecers
