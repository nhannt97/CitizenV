import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const CitizenList = Loadable(lazy(() => import('views/citizens/List')));
const CitizenAddNew = Loadable(lazy(() => import('views/citizens/AddNew')));
const UserList = Loadable(lazy(() => import('views/users/List')));
const UserAddNew = Loadable(lazy(() => import('views/users/AddNew')));
const ProvinceList = Loadable(lazy(() => import('views/provinces/List')));

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
            path: '/provinces/list',
            element: <ProvinceList />
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
            element: <UserList />
        },
        {
            path: '/users/add-new',
            element: <UserAddNew />
        },
        {
            path: '/users/:userId/edit',
            element: <UserAddNew />
        },
    ]
};

export default MainRoutes;
