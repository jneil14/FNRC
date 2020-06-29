import React from 'react';
import {NavDropdown, Nav} from "react-bootstrap";
import footprints from '../assets/images/footprints.jpg';

function Navigation() {

    const handleSelect = eventKey => alert(`selected ${eventKey}`);
    
    return (
      <>
        <div className="nav">
          <div className="nav__logo">
            <img className="nav__logo-image" src={footprints} alt="logo" />
          </div>

          <div className="nav__navbar">
            <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
              <Nav.Item>
                <Nav.Link eventKey="1" title="Item">
                  ABOUT US
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                // className="nav__navbar-2"
                eventKey="2"
                title="SERVICES"
                id="nav-dropdown"
              >
                <NavDropdown.Item eventKey="2.1">CELBAN</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2">IELTS</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="2.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="3" disabled>
                  CONTACT US
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </>
    );
}

export default Navigation
