import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNavbar.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppLogo } from './AppLogo';

export function MainNavbar() {
  useEffect(() => {
    document
      .getElementById("app-logo")
      .setAttribute("style", `filter: invert(90%) sepia(100%) saturate(28%) hue-rotate(344deg) 
                                    brightness(108%) contrast(106%); 
                            width: 75px;`);                   
  }, []);
  return (
    <div>
      <Navbar id="main-navbar" expand="lg">
        <Container>
          <AppLogo width={100} />
          <Navbar.Brand href="#home"><p>Meetups</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Mi Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/logout">Cerrar Sesión</Link>
                  </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Notificaciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};