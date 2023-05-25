import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PatientRoutes } from '@components/patient/PatientRoutes';
import { Patients } from '@components/patient/Patients';
import { AppErrorPage } from './AppErrorPage';
import { UserRoutes } from '@components/user/UserRoutes';
import { ReportRoutes } from '@components/report/ReportRoutes';
import { ClinicalRoutes } from '@components/clinical/ClinicalRoutes';
import { ClaimRoutes } from '@components/claim/ClaimRoutes';
import { PlanRoutes } from '@components/plan/PlanRoutes';
import { RiskRoutes } from '@components/risk/RiskRoutes';

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
            ClinicalRoutes,
            ClaimRoutes,
            PlanRoutes,
            RiskRoutes,
            UserRoutes,
            ReportRoutes,
        ],
    },
]);

export const AppAuthorizedRoutes = () => {
    return <RouterProvider router={router} />;
};
