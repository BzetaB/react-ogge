import { createBrowserRouter } from 'react-router-dom'
import { SingUp } from '../presentation/views/SignUp'
import { AuthLayout } from '../presentation/layouts/authLayout'
import { Login } from '../presentation/views/Login'
import { Home } from '../presentation/views/Home'


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                index: true,
                element: <Login />
            },
            {
                path: "/registro",
                element: <SingUp />
            }
        ]
    },
    {
        path: "/home",
        element: <Home />
    },
])