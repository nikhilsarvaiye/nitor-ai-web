import { Patient } from '@components/patient/Patient';
import { RouteObject } from 'react-router-dom';
import { Patients } from './Patients';

export const PatientRoutes = {
    path: 'patients',
    children: [
        {
            path: '',
            element: <Patients />,
        },
        {
            path: 'new',
            element: <Patient />,
        },
        {
            path: ':id',
            element: <Patient />,
        },
    ],
} as RouteObject;
