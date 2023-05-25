import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PatientRoutes } from '@components/patient/PatientRoutes';
import { Patients } from '@components/patient/Patients';
import { AppErrorPage } from './AppErrorPage';
import { UserRoutes } from '@components/user/UserRoutes';
import { ReportRoutes } from '@components/report/ReportRoutes';

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
        ],
    },
]);

export const AppAuthorizedRoutes = () => {
    return <RouterProvider router={router} />;
};
