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
  constructor(props){
    super(props);
    this.state={ 
      showing: true 
    }
}
componentDidMount(){
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) {
      document.getElementById("fixed-nav").classList.add("fixed");
    } else {
      document.getElementById("fixed-nav").classList.remove("fixed");
    }
  };
}
  render() {
      const { showing } = this.state;
      return (
          <div className="postion-relative">
            <header id="fixed-nav" className="">
              <div className="brand"><Link to="/"><img src="./assets/images/hw.png"></img></Link></div>
              <button className="harmburgermenu" onClick={() => this.setState({ showing: !showing })}></button>
            </header>              
              <div id="mySidenav" className="sidenav d-flex flex-column align-self-center" style={{ width: (showing ? '0'+'px' : '350'+'px') }}>
              <div className="logo-sidebar">
                <Link to="/"><img src="./assets/images/hw.png"></img></Link>
              </div>
              <button className="closebtn" onClick={() => this.setState({ showing: !showing })}></button>
              <Nav className="h-100 justify-content-center" style={{ width: (showing ? '0'+'px' : '350'+'px') }} navbar>
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
                  <ul className="d-flex justify-content-start no-list-style mb-3">
                    <li className="mr-2"><a href=""><i className="fab fa-2x fa-facebook-square"></i></a></li>
                    <li className="mr-2"><a href=""><i className="fab fa-2x fa-twitter-square"></i></a></li>
                    <li className="mr-2"><a href=""><i className="fab fa-2x fa-instagram"></i></a></li>
                    <li className="mr-2"><a href=""><i className="fab fa-2x fa-whatsapp"></i></a></li>
                    <li className=""><a href=""><i className="fab fa-2x fa-youtube"></i></a></li>
                  </ul>
              </div>
          </div>  
      )
  }
}