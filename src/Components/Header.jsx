import React from "react";
import {  Navbar, NavLink } from "react-bootstrap";
import './buton.css'

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary mb-4 px-3">
        <img src="src/assets/booklogo.png" className="me-2" width={30} alt="" srcset="" />
        <Navbar.Brand href="/">Library</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink href="/add" className="button-28">Add Book</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;