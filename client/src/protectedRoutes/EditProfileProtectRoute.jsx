/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";
const EditProfileProtectRoute = (props) => {
    const token = useSelector((state) => state.token)
    // console.log(isToken);
    if(token?.isToken) {
        console.log('hi i am EditProfileProtectRoute');
        return props.children
    }
    else{
        console.log('hi i am EditProfileProtectRoute')
        return (
            <Navigate to='/' />
            )
        }
}

export default EditProfileProtectRoute
