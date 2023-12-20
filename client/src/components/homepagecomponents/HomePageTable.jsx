/* eslint-disable react/prop-types */
import {flexRender,getCoreRowModel,useReactTable} from '@tanstack/react-table'
import { columns } from '../../utils/tanstacktable/columnHelper'
import { api } from '../../utils/api'
import { useEffect, useState, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { showLoading, hideLoading } from '../../redux/features/loadingSlice'

// HomePageTable Component
const HomePageTable = ({tableSearchParams,setTableSearchParams}) => {
  const {loading} = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const [searchParams,setSearchParams] = useSearchParams()

// table search params
  let job = tableSearchParams?.job
  let province = tableSearchParams?.province
  // const province = 'herat'

  // params to get
  const pageParams = searchParams.get("page")
  const jobParams = searchParams.get("job") || ''
  const provinceParams = searchParams.get("province") || ''
  // console.log(provinceParams);

  const [data,setData] = useState([])
  const [pagination,setPagination] = useState({
    pageIndex:0,
    pageSize: 5
  })
  const getAllUsersData = useCallback(async () => {
    try {
      dispatch(showLoading())
      const response = await api.get(`/api/v1/user/users?page=${pageParams}&job=${jobParams}&province=${provinceParams}`)
      dispatch(hideLoading())
      setData(response?.data?.data)
    } catch (error) {
      console.log(error);
      dispatch(hideLoading())
    }

  },[pageParams,dispatch,provinceParams,jobParams])

  const table = useReactTable({
    data,
    columns,
    state:{
      pagination
    },
    pageCount:data?.totalPages,
    manualPagination:true,
    onPaginationChange:setPagination,
    getCoreRowModel: getCoreRowModel(),
  })

  useEffect(() => {
    if(job && province){
      setSearchParams({page: table.getState().pagination.pageIndex + 1,job,province})
    }else if(job){
      setSearchParams({page: table.getState().pagination.pageIndex + 1,job})
    }else{
      setSearchParams({page: table.getState().pagination.pageIndex + 1,province})
    }
  },[setSearchParams,table,pagination,job,province])

  // get all user data
  useEffect(() => {
    getAllUsersData();
  },[getAllUsersData])

  if(loading) return <h1>Loading...</h1>
  // if data dose'nt have length this div will appear
  if(data.length < 1) return <div className='bg-blue-500 h-full text-3xl text-white text-center flex justify-center items-center'>
    {/* on click the params will become empty string to get all data */}
    <Link to='/' className='uppercase underline' onClick={() => setTableSearchParams({job:'',province:''})}>
    go back to home
    </Link>
  </div>
  return (
    <div className='max-w-[1100px] mx-auto'>
      <div className='w-full overflow-auto overflow-x-scroll md:overflow-x-hidden px-4 max-h-fit '>
        <table className='min-w-[700px] md:w-full text-white bg-blue-500 p-6'>
          <thead className="text-right">
            {
                table.getHeaderGroups().map(headerGroup => {
                   return <tr key={headerGroup?.id} className=''>
                        {
                            headerGroup.headers.map((header) => {
                               return <td className='font-semibold md:font-bold sm:text-lg md:text-2xl p-4 text-base border-2' key={header?.id}>{flexRender(header.column.columnDef.header, header.getContext())}</td>
                            })
                        }
                    </tr>
                })
            }
          </thead>
          <tbody className='text-right'>
            {
                table.getRowModel().rows.map((row,index) => {
                    return <tr key={row?.id} 
                    className={`
                    ${index % 2 === 0 ? "bg-blue-800" : "bg-blue-900"} text-white min-w-full my-1 border md:text-2xl sm:text-lg text-base
                    `}
                    >
                        {
                            row.getVisibleCells().map(cell => {
                              return  <td key={cell?.id} className='p-4'>
                                {console.log(cell)}
                                {cell.column.id === 'email' ? <Link to={`/profile/?email=${cell.getValue(cell.id)}`}>{flexRender(cell.column.columnDef.cell, cell.getContext())} </Link> : flexRender(cell.column.columnDef.cell, cell.getContext())} </td>
                            })
                        }
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
      <div className='flex justify-between m-4 font-persionFont'>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className={`${!table.getCanPreviousPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500' } px-2 hover:bg-blue-700 text-white sm:w-fit md:px-10 sm:px-7 sm:py-2 text-sm md:text-xl rounded-md sm:font-bold`}>قبلی</button>
        <p className='md:text-xl text-sm'><span className='mx-2'>{table.getPageCount()}</span> صفحه <span className='mx-2'>{table.getState().pagination.pageIndex + 1}</span> از</p>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className={`${!table.getCanNextPage()?'bg-red-500 hover:bg-gray-400 hover:cursor-not-allowed':'bg-blue-500'} hover:bg-blue-700 text-white w-fit md:px-10 px-2 sm:px-7 sm:py-2 text-sm md:text-xl rounded-md font-bold`}>بعدی</button>
      </div>
    </div>
  )
}

export default HomePageTable