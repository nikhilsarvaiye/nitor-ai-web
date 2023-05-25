import { RouteObject } from 'react-router-dom';
import { RiskPatients } from './Risk';

export const RiskRoutes = {
    path: 'risk',
    children: [
        {
            path: '',
            element: <RiskPatients />,
        },
    ],
} as RouteObject;
