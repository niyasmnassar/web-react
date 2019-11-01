import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Link, NavLink } from "react-router-dom";

export default class Mynav extends React.Component {

  state = { showing: true };

  render() {
      const { showing } = this.state;
      return (
          <div>
              <button className="harmburgermenu" onClick={() => this.setState({ showing: !showing })}></button>
              <div id="mySidenav" className="sidenav d-flex align-items-center" style={{ width: (showing ? '0'+'px' : '350'+'px') }}>
              <div className="logo-sidebar">
                <Link to="/">brand</Link>
              </div>
              <button className="closebtn" onClick={() => this.setState({ showing: !showing })}></button>
              <Nav className="" navbar>
              <NavItem>
                <NavLink exact to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/ourworks">Our works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contactus">Contact us</NavLink>
              </NavItem>
            </Nav>
              </div>
          </div>  
      )
  }
}