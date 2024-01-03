/* eslint-disable react/prop-types */
import {useSelector} from 'react-redux'

const WorkerAccountProtect = ({children}) => {
    const workerExist = useSelector((state) => state.user)
    console.log(workerExist?.user);
    if(workerExist?.user){
        return <h1>Update Profile Page</h1>
    }else{
        return (
            {
              children  
            }
          )
    }
}

export default WorkerAccountProtect