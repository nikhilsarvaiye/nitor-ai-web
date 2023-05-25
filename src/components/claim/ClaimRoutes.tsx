import { Claim } from '@components/claim/Claim';
import { RouteObject } from 'react-router-dom';
import { Claims } from './Claims';

export const ClaimRoutes = {
    path: 'claims',
    children: [
        {
            path: '',
            element: <Claims />,
        },
        {
            path: 'new',
            element: <Claim />,
        },
        {
            path: ':id',
            element: <Claim />,
        },
    ],
} as RouteObject;
