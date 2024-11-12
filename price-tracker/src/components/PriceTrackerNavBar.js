// Gemini AI assisted code

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTheme } from "../contexts/ThemeProvider";

import logo from "../assets/logo.png";

const PriceTrackerNavBar = React.memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {" "}
      {/** Nav Bar */}
      <Navbar bg={theme} data-bs-theme={theme}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width="60" height="60" alt="PT" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Price Tracker
            </Nav.Link>
            <Nav.Link as={Link} to="/community">
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
              Help
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/** Nav Bar */}
    </div>
  );
});

export default PriceTrackerNavBar;
