/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

// pages
const RootLayout = lazy(() => import('../layouts/RootLayout'));
const Home = lazy(() => import('../pages/Home'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Hire = lazy(() => import('../pages/Hire'))
const HireDataPage = lazy(() => import('../pages/HireDataPage'))
const JobSecers = lazy(() => import('../pages/JobSecers'))
const Employ = lazy(() => import('../components/Employ'))
const UserJobInformationPage = lazy(() => import('../components/workeraccount/UserJobInformationPage'))
// const AllJobs = lazy(() => import('../components/workeraccount/AllJobs'))c
const AllJobs = lazy(() => import('../pages/AllJobs'))
const PhoneNumberVerifier = lazy(() => import('../pages/PhoneNumberVerifier'))

import ProtectPhoneNumberPage from '../protectedRoutes/ProtectPhoneNumberPage';
import ProtectedRoutesForPhoneNumber from '../protectedRoutes/ProtectedRoutesForPhoneNumber';
import WorkerAccountProtect from '../protectedRoutes/WorkerAccountProtect';
import UserProfileTable from '../components/UserProfileTable';

import Fallback from '../components/Fallback';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Suspense fallback={<Fallback />}><RootLayout/></Suspense>}>
            <Route index element={<Suspense fallback={<Fallback/>}><Home/></Suspense>} />
            <Route path='/signup-phone-number' element={<ProtectPhoneNumberPage><PhoneNumberVerifier/></ProtectPhoneNumberPage>} />
            <Route path='employer' element={<Employ/>} />
            <Route path='workers' element={<JobSecers/>} />
            <Route path='jobs' element={<AllJobs/>} />
            <Route path='userprofile/:id' element={<UserProfileTable/>} />
            <Route path='hire-form' element={<ProtectedRoutesForPhoneNumber><HireDataPage/></ProtectedRoutesForPhoneNumber>} />
            <Route path='worker-account' element={<ProtectedRoutesForPhoneNumber><WorkerAccountProtect><UserJobInformationPage/></WorkerAccountProtect></ProtectedRoutesForPhoneNumber>} />
            <Route path='hire' element={<Suspense fallback={<Fallback/>}><Hire/></Suspense>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)
// to solve git problem jobs
// git branch --unset-upstream