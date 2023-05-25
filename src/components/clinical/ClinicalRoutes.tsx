import { Clinical } from '@components/clinical/Clinical';
import { RouteObject } from 'react-router-dom';
import { Clinicals } from './Clinicals';

export const ClinicalRoutes = {
    path: 'clinicals',
    children: [
        {
            path: '',
            element: <Clinicals />,
        },
        {
            path: 'new',
            element: <Clinical />,
        },
        {
            path: ':id',
            element: <Clinical />,
        },
    ],
} as RouteObject;
