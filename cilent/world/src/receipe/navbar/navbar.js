import React from "react";
import { Navbar, NavbarBrand} from 'react-bootstrap';
import "./navbar.css";

function Navigation(){
    return(
        <>
        <Navbar className="navbar-color">
            <NavbarBrand className="navbar-brand">
                <span>food Receipe</span>
            </NavbarBrand>
        </Navbar>
        </>
    )
}
export default Navigation;