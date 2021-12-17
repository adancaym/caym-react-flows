import {lazy} from "react";

import Public from "../layouts/public/Public";
import {RouterInterface} from "./types";

const About = lazy(() => import('../pages/public/about/About'))
const Home = lazy(() => import('../pages/public/home/Home'))

export const PublicRouter: RouterInterface[] = [
    {
        path: '/',
        element: <Public/>,
        label: '',
        scope: 'public',
        children: [
            {
                path: '/',
                label: 'inico',
                element: <Home/>,
                scope: 'public',
            },
            {
                path: '/home',
                label: 'inico',
                element: <Home/>,
                scope: 'public',
            },
            {
                path: '/about',
                label: 'Acerca de nostros',
                element: <About/>,
                scope: 'public',
            }
        ]
    },
]