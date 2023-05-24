import { UserLogin } from './auth/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Signup } from './auth/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <UserLogin />,
        children: [
            {
                path: '',
                element: <UserLogin />,
            },
            {
                path: '/login',
                element: <UserLogin />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
        ]
    },
]);

export const AppUnauthorizedRoutes = () => {
    return <RouterProvider router={router} />;
};
