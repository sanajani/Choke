/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { lazy, Suspense } from 'react';

// pages
const RootLayout = lazy(() => import('../layouts/RootLayout'));
const Home = lazy(() => import('../pages/Home'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Hire = lazy(() => import('../pages/Hire'))
import Fallback from '../components/Fallback';
import HireDataPage from '../pages/HireDataPage';
import JobSecers from '../pages/JobSecers';
const UserJobInformationPage = lazy(() => import('../components/userJobInfo/UserJobInformationPage'))

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Suspense fallback={<Fallback />}><RootLayout/></Suspense>}>
            <Route index element={<Suspense fallback={<Fallback/>}><Home/></Suspense>} />
            <Route path='hire-form' element={<HireDataPage/>} />
            <Route path='jobs' element={<JobSecers/>} />
            <Route path='worker-account' element={<UserJobInformationPage/>} />
            <Route path='hire' element={<Suspense fallback={<Fallback/>}><Hire/></Suspense>}/>
        </Route>
        <Route path='*' element={<PageNotFound />} />         
        </>
    )
)
// to solve git problem
// git branch --unset-upstream