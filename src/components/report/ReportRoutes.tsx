import { RouteObject } from 'react-router-dom';
import { AppInsights } from './AppInsights';
import { Summary } from './Summary';

export const ReportRoutes = {
    path: 'dashboard',
    children: [
        {
            path: '',
            element: <Summary />,
        },
        {
            path: 'insights',
            element: <AppInsights />,
        },
    ],
} as RouteObject;
