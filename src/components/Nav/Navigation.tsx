import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import { RouterInterface } from '../../router'
import './Navigation.css';

interface NavProps {
    links: RouterInterface[];
    title?: string;
}
export const Navigation = ({ links, title }: NavProps) => {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">{title ? title : 'NavBar'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {links.map(e => (
                            <LinkContainer key={e.path} to={e.path}>
                                <Nav.Link >{e.label.toUpperCase()}</Nav.Link>
                            </LinkContainer>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;