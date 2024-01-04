

const UserProfileTable = () => {
    const data = {
        phoneNumber: 'phoneNumber',
        name: 'name',
        email: 'email@gmail.com',
        city:'city',
        currentLocation: 'currentLocation',
        userInformation: 'رات (به پارسی باستان: 𐏃𐎼𐎡𐎺 ؛ نویسه‌گردانی: *هَرَیْوه) یکی از کلان‌شهرهای افغانستان، مرکز ولایت هرات در غرب آن کشور است. این شهر پس از کابل، دومین شهر پرجمعیت افغانستان محسوب می‌شود. جمعیت آن در سال ۲۰۲۰ میلادی ۵۵۶٬۲۰۵ تن تخمین زده شده‌است. هرات قطب صنعتی و مهم‌ترین کانون فرهنگی-هنری افغانستان ',
        lastName:  'lastName',
        job:  'job',
        phoneNumber1:'phoneNumber1',
        phoneNumber2:"phoneNumber2",
        educationLevel: "educationLevel",
        jobExp:"jobExp",
        typeOfJob: ['one','two','three','four','five'],
        currentJob: "currentJob"
     }

  return (
      <div dir="ltr" className='max-w-[1100px] mx-auto p-4 mt-2 rounded-lg flex flex-col items-end text-right'>
            <div
              className='my-3 rounded-lg bg-gray-50 shadow-xl border-t-2 max-w-full w-full px-5'
            >
             {data.name && <h1 className='md:my-2 font-bold text-base sm:text-lg text-blue-800 md:text-2xl'>{ `جان استم ${data.name} سلام من`}</h1>}
             {data.city && <p className='text-lg my-1 underline'>استم {data.city} من از </p> }
             {data.userInformation && <p className='text-lg md:text-xl my-3 p-4 border-t-2 rounded-lg shadow-lg'>{data.userInformation}</p>}
              {/* <p className="text-sm">{data.jobExp}</p> */}
              <div className='bg-gray-50 my-4 p-5 border-t-2'>
                <p className='font-bold text-xl my-3'>درمورد من </p>
               {data.lastName && <p className='text-lg font-medium border-b-2 my-4'>{`استم ${data.lastName} ${data.name} سلام من`}</p>}
               {data.email && <p className='text-lg font-medium border-b-2 my-4' >{`${data.email} این ایمیل آدرس من است`}</p>}
                {data.job && data.city && <p className='text-lg font-medium border-b-2 my-4'>{`است ${data.job} و شغل من  ${data.city} از`  }</p>}
               {data.currentLocation && <p className='text-lg font-medium border-b-2 my-4'>{` زندگی میکنم ${data.currentLocation} فعلا در`}</p>}
               {data.jobExp && <p className='text-lg font-medium border-b-2 my-4'>{`سال تجربه کاری دارم ${data.jobExp} من `}</p>}
                <div className='text-lg font-medium border-b-2 my-4'>
                    <p>{`این شماره های تماس من است `}</p>
                    <span>{data.phoneNumber1}</span>
                   {data.phoneNumber2 && <span>{data.phoneNumber2}</span>}
                </div>
               {data.educationLevel && <p className='text-lg font-medium border-b-2 my-4'>{`است ${data.educationLevel} سطح تحصیل من `}</p>}
               {data.jobExp && <p className='text-lg font-medium border-b-2 my-4'>{` سال تجربه کاری دارم  ${data.jobExp}`}</p> }
               {data.currentJob && <p className='text-lg font-medium border-b-2 my-4'>{` کار میکنم ${data.currentJob} فعلا در `}</p>}
                <div className='text-base font-medium border-b-2 my-4'>
                {
                  data.typeOfJob &&
                  data.typeOfJob.map((id,element) => {
                   return <span className='mx-2' key={id}>{data?.typeOfJob[element]}</span>
                  })
                }
                </div>
              </div>
            </div>
      </div>
  )
}

export default UserProfileTable