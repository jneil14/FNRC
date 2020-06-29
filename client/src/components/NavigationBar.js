import React from 'react';
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo.PNG";

export default function NavigationBar() {
    return (
      <>
        <div className="nav__container">
          <Navbar

            className="navbar"
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="#home">
              <img className="navbar__logo" src={logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav>
                  <Nav.Link href="#about">ABOUT US</Nav.Link>
                  <NavDropdown title="SERVICES" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      IELTS-RN
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      CELBAN
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">NCAS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      CPNRE
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav.Link eventKey={2} href="#contact">
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
}
