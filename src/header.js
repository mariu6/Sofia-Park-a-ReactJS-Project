import React from 'react';
import logo from './logo.svg';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">
                    <img
                        src="/sofia_park_full.png"
                        className="d-inline-block align-top"
                        alt="Sofia Park logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button >Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                        <Nav.Link href="/register">sign up</Nav.Link>
                        </Nav.Item>
                        <Nav.Link href="/login">login</Nav.Link>
                        <Nav.Link href="/user">username</Nav.Link>
                        <Nav.Link href="/help">Help/About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
