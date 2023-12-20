
const UserProfileTable = ({experience,phoneNumber2,phoneNumber1,job,province,lastName,name}) => {
  return (
    <table className=''>
    <thead className='bg-black text-white text-sm font-persionFont'>
        <tr className='text-base sm:text-lg md:text-xl font-bold '>
            <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تجربه</th>
            <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>2 شماره</th>
            <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>1 شماره</th>
            <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>وظیفه</th>
            <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>موقعیت</th>
            <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تخلص</th>
            <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>نام</th>
        </tr>
    </thead>
    <tbody className='bg-gray-300 font-persionFont'>
        <tr className='text-sm sm:text-base md:text-lg font-bold '>
            <td className='py-2 px-4 text-center whitespace-nowrap'>{experience}</td>
            <td className='py-2 px-4 text-center whitespace-nowrap'>{phoneNumber2}</td>
            <td className='py-2 px-4 text-center whitespace-nowrap'>{phoneNumber1}</td>
            <td className='py-2 px-4 text-center whitespace-nowrap'>{job}</td>
            <td className='py-2 px-4 text-center whitespace-nowrap'>{province}</td>
            <td className='py-2 px-4 text-center whitespace-nowrap'>{lastName}</td>
            <td className='py-2 px-4 text-center whitespace-nowrap'>{name}</td>
        </tr>
    </tbody>
</table>
  )
}

export default UserProfileTable