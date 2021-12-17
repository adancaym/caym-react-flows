import {Link} from 'react-router-dom'
import './Navigation.css';
import {RouterInterface} from "../../router/types";

interface NavProps {
    links: RouterInterface[];
    title?: string;
}

export const Navigation = ({links = [], title = 'Navigation'}: NavProps) => {
    return (
        <nav>
            <ul>
                {title && <li><span>{title}</span></li>}
                {links.map((link: RouterInterface) =>
                    <li key={links.indexOf(link)}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation;