import { RouteObject } from "react-router-dom";
import {AdminRouter} from './admin'
import {PublicRouter} from './public'
import {RouterInterface} from "./types";





export const router: RouterInterface[] = [
    ...PublicRouter,
    ...AdminRouter
]