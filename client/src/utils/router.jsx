/* eslint-disable react-refresh/only-export-components */
// react-router package
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

// import RootLayout from '../layouts/RootLayout'
import { lazy, Suspense } from 'react';

// pages
const RootLayout = lazy(() => import('../layouts/RootLayout'));
const Home = lazy(() => import('../pages/Home'))
const Signup = lazy(() => import('../pages/Signup'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Contact = lazy(() => import('../pages/Contact'))
const UpdateAccount = lazy(() => import('../pages/UpdateAccount'))
const Profile = lazy(() => import('../pages/Profile'))
const Signin = lazy(() => import('../pages/Signin'))
const Hire = lazy(() => import('../pages/Hire'))
const EditProfileProtectRoute = lazy(() => import('../protectedRoutes/EditProfileProtectRoute'))
const ProtectSignup = lazy(() => import('../protectedRoutes/ProtectSignup'))
import Fallback from '../components/Fallback';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Suspense fallback={<Fallback />}><RootLayout/></Suspense>}>
            <Route index element={<Suspense fallback={<Fallback/>}><Home/></Suspense>} />
            <Route path='contact' element={<Suspense fallback={<Fallback/>}><Contact/></Suspense>}/>
            <Route path='hire' element={<Suspense fallback={<Fallback/>}><Hire/></Suspense>}/>
            <Route path='signup' element={<Suspense fallback={<Fallback/>}><ProtectSignup><Signup/></ProtectSignup></Suspense>}/>
            <Route path='signin' element={<Suspense fallback={<Fallback/>}><ProtectSignup><Signin/></ProtectSignup></Suspense>}/>
            <Route path='updateprofile' element={<Suspense fallback={<Fallback/>}><EditProfileProtectRoute><UpdateAccount/></EditProfileProtectRoute></Suspense>}/>
            <Route path='profile' element={<Suspense fallback={<Fallback/>}><Profile/></Suspense>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)
// to solve git problem
// git branch --unset-upstream