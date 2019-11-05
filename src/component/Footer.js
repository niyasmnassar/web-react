import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { createSecureContext } from "tls";
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <footer className="p-4">
           <div className="container-fluid">
               <div className="row align-items-center">
                   <div className="col-sm-12">
                    {/* <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">About us</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/ourworks">Our works</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/services">Services</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contactus">Contact us</Link>
                        </NavItem>
                    </Nav> */}
                    <p className="font-12 mb-0 text-center">Copyright&nbsp;&nbsp;&copy;&nbsp;&nbsp;2018&nbsp;&nbsp;happiestweddings.com</p>
                   </div>
                   
               </div>
           </div>
       </footer>
      </div>
    );
  }
}
export default Footer;
