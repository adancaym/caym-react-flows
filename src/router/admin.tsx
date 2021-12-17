import {lazy} from "react";
import Admin from '../layouts/admin/Admin'
import {RouterInterface} from "./types";

const Home = lazy(() => import('../pages/public/home/Home'))

export const AdminRouter: RouterInterface[] = [
    {
        path: '/admin',
        element: <Admin/>,
        label: 'admin',
        scope: 'admin',
        children: [
            {
                path: 'home',
                label: 'Inicio',
                element: <Home/>,
                scope: 'admin',
            }
        ]
    }
]