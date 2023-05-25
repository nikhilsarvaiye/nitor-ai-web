import { Plan } from '@components/plan/Plan';
import { RouteObject } from 'react-router-dom';
import { Plans } from './Plans';

export const PlanRoutes = {
    path: 'plans',
    children: [
        {
            path: '',
            element: <Plans />,
        },
        {
            path: 'new',
            element: <Plan />,
        },
        {
            path: ':id',
            element: <Plan />,
        },
    ],
} as RouteObject;
