import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductRoutes } from '@components/product/ProductRoutes';
import { Products } from '@components/product/Products';
import { AppErrorPage } from './AppErrorPage';
import { UserRoutes } from '@components/user/UserRoutes';
import { ReportRoutes } from '@components/report/ReportRoutes';
import { AppInsights } from '@components/report/AppInsights';
import { Performance } from '@components/report/Performance';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <AppErrorPage />,
        children: [
            {
                path: '',
                element: <Products />,
            },
            ProductRoutes,
            UserRoutes,
            ReportRoutes,
            {
                path: 'insights',
                element: <AppInsights />,
            },
            {
                path: 'performance',
                element: <Performance />,
            },
        ],
    },
]);

export const AppAuthorizedRoutes = () => {
    return <RouterProvider router={router} />;
};
