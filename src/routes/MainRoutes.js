import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const CitizenList = Loadable(lazy(() => import('views/citizens/List')));
const CitizenAddNew = Loadable(lazy(() => import('views/citizens/AddNew')));

// sample page routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/citizens/list',
            element: <CitizenList />
        },
        {
            path: '/citizens/:citizenId/edit',
            element: <CitizenAddNew />
        },
        {
            path: '/citizens/add-new',
            element: <CitizenAddNew />
        },
        {
            path: '/users/list',
            element: <CitizenList />
        },
        {
            path: '/users/add-new',
            element: <CitizenAddNew />
        },
        {
            path: '/users/:userId/edit',
            element: <CitizenAddNew />
        },
    ]
};

export default MainRoutes;
