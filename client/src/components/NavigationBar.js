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
            <Nav.Link href="#hero"><Navbar.Brand>
              <img className="navbar__logo" src={logo} alt="logo" />
            </Navbar.Brand></Nav.Link>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav>
                  <Nav.Link href="#about">ABOUT US</Nav.Link>
                  <NavDropdown title="SERVICES" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      <Nav.Link
                        className="text-success padding='70%"
                        eventKey={3}
                        href="#celban"
                      >
                        CELBAN
                      </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Nav.Link
                        className="text-success"
                        eventKey={4}
                        href="#ncas"
                      >
                        NCAS-RN LPN
                      </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <Nav.Link
                        className="text-success"
                        eventKey={5}
                        href="#nclex"
                      >
                        NCLEX-RN
                      </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="text-success"
                      href="#action/3.4"
                    >
                      <Nav.Link
                        className="text-success"
                        eventKey={6}
                        href="#cpnre"
                      >
                        CPNRE
                      </Nav.Link>
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
