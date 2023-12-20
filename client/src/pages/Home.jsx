import HomePageTable from "../components/homepagecomponents/HomePageTable"
import { ToastContainer } from "react-toastify"
import SearchTable from '../components/homepagecomponents/SearchTable'
import { useState } from "react"

const Home = () => {
  const [tableSearchParams,setTableSearchParams] = useState({
    job:'',
    province:''
  });
  console.log(tableSearchParams);

  return (
    <>
  <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <main className="min-h-screen pt-24 grid grid-cols-1 md:grid-cols-3 md:px-4">

      <div>
        <SearchTable tableSearchParams={tableSearchParams} setTableSearchParams={setTableSearchParams} />
      </div>
      <div className='md:col-span-2 md:w-full'>
        <HomePageTable tableSearchParams={tableSearchParams} />
      </div>
    </main>
    </>
  )
}

export default Home