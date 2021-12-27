import {Link, NavLink} from 'react-router-dom'
import './Navigation.css';
import {RouterInterface} from "../../router/types";

interface NavProps {
    links: RouterInterface[];
    title?: string;
}

export const Navigation = ({links = [], title = 'Navigation'}: NavProps) => {
    return (
        <ul>
            <li>
                <a className={'main'} >{title}</a>
            </li>
            {links.map( link => {
                return (
                    <li>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                )
            })}
        </ul>

    )
}

export default Navigation;