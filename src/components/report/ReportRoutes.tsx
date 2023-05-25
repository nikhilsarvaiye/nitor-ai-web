import { RouteObject } from 'react-router-dom';
import { Summary } from './Summary';

export const ReportRoutes = {
    path: 'dashboard',
    children: [
        {
            path: '',
            element: <Summary />,
        },
    ],
} as RouteObject;
