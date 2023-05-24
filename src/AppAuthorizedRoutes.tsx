import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PatientRoutes } from '@components/patient/PatientRoutes';
import { Patients } from '@components/patient/Patients';
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
                element: <Patients />,
            },
            PatientRoutes,
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
