import { FaSearch } from "react-icons/fa";
import { list_of_districts } from "../../utils/provincename";

const SearchAndPlace = () => {
  return (
    <div className="min-w-full border-2 sm:flex my-2">
        <div className="w-full flex flex-col relative">
            <input className="border relative text-right px-2 outline-none py-2" placeholder="چی کاری" type="text"  />
            <button className="absolute h-full px-3"><FaSearch size={18}/></button>
        </div>
        <div className=" w-full flex flex-col relative">
            <select
                    name='selectlocation'
                    id='selectlocation'
                    className="border border-r-0 relative text-right px-2 outline-none py-2"
                    >
                        {list_of_districts.map(item => {
                            return (
                                <option
                                className='text-lg' value={item.label} key={item.value}>
                                    {item.value}
                                </option>
                            )
                        })}
                    </select>
        </div>
    </div>
  )
}

export default SearchAndPlace