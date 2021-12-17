import {RouteObject} from "react-router-dom";

export interface RouterInterface extends RouteObject {
    label: string
    children?: RouterInterface[],
    scope: string;
    path: string;
}
