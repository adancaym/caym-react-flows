import { RouteObject } from "react-router-dom";
import {AdminRouter} from './admin'
import {PublicRouter} from './public'



export interface RouterInterface extends RouteObject {
    label: string
    children?: RouterInterface[],
    scope: string;
    path: string;
}


export const router: RouterInterface[] = [
    ...PublicRouter,
    ...AdminRouter
]