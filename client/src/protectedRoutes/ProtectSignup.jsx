/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";
const ProtectSignup = (props) => {
    const token = useSelector((state) => state.token)
    // console.log(isToken);
    if(!token?.isToken) {
        console.log('hi i am ProtectSignup');
        return props.children
    }
    else{
        console.log('hi i am ProtectSignup')
        return (
            <Navigate to='/' />
            )
        }
}

export default ProtectSignup
