import {Route, Routes } from 'react-router-dom'
import { SingUp } from '../../presentation/views/pages/SingUp'
import { AuthLayout } from '../../presentation/views/layouts/authLayout'


export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element= {<AuthLayout />}>
            </Route>
        </Routes> 
    )
}