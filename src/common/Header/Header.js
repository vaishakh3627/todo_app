import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";

import "./style.scss";

const Header = () => {
  return (
    <Navbar bg="light" expand={false} fixed="top" className="header-nav">
      <Container fluid className="header-contents">
        <Navbar.Brand href="#">My Todo</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="offcanvasNavbarLabel"><h1>Account</h1></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className= "home-link">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="home-link">Home</Nav.Link>
              <NavDropdown className= "home-link" title="Actions" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Todo List</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Completed Todo's
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Pending Todo's
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Deleted Todo's
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Header;
