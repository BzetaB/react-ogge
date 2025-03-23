import {createBrowserRouter } from 'react-router-dom'
import { SingUp } from '../../presentation/views/pages/SignUp'
import { AuthLayout } from '../../presentation/layouts/authLayout'
import { Login } from '../../presentation/views/pages/Login'


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout/>,
        errorElement : <div>Error</div>,
        children: [
            {
                path: "/",
                index : true,
                element:<Login/>
            },
            {
                path :"/signUp",
                element: <SingUp/>
            }
        ]
    }
])