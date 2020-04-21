/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Builder } from '@builder.io/react';

class ScrollNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-scroll"));
    // initialise
    headroom.init();
  }
  scrollPage = (e, id) => {
    e.preventDefault();
    if (document.getElementById(id) !== null) {
      document.getElementById(id).scrollIntoView();
    }
  };
  render() {
    const isMobile = window.innerWidth < 576;

    return (
      <>
        <Navbar className="fixed-top bg-transparent" expand="lg" id="navbar-scroll">
        <Container>
          <div className="navbar-translate">
            <button className="navbar-toggler" id="example-header-4">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <NavbarBrand
            >
            <a href="/home">
              <img src={require("../../assets/img/revibetransparent.png")} style={{width:150, marginTop: -7}} />
            </a>
            </NavbarBrand>
          </div>
          <UncontrolledCollapse navbar toggler="#example-header-4" style={isMobile ? { backgroundColor: "#4f5353" } : {}}>
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    className="navbar-toggler"
                    id="example-header-4"
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className={`ml-auto ${isMobile ? "d-flex align-items-center" : ""}`} navbar>
              <NavItem 
                style={isMobile ? {width: "100%"} : {}}
              >
                <NavLink
                  href="/blog"
                  style={isMobile ? {width: "100%"} : {}}
                  className={`${isMobile ? "d-block text-center" : ""}`}
                >
                  Blog
                </NavLink>
              </NavItem>
              {/*<NavItem>
                <NavLink
                  href="/contact"
                >
                  Contact Us
                </NavLink>
              </NavItem>}*/}
              <NavItem
                style={isMobile ? {width: "100%"} : {}}
              >
                <NavLink
                  href="https://artist.revibe.tech"
                  target="_blank"
                  style={isMobile ? {width: "100%"} : {}}
                  className={`${isMobile ? "d-block text-center" : ""}`}
                >
                  For Artists
                </NavLink>
              </NavItem>
              {isMobile ? <br/> : null}
              <a href="https://apps.apple.com/app/apple-store/id1500839967?mt=8" target="_blank" style={isMobile ? {width:"100%"} : {}}>
                <Button color="primary" className={`${isMobile ? "ml-auto mr-auto text-center d-block" : ""}`} style={{width:"100%"}}>Download <i className="tim-icons icon-minimal-right" /></Button>
              </a>

            </Nav>
            </UncontrolledCollapse>
        </Container>
        </Navbar>
      </>
    );
  }
}

Builder.registerComponent(ScrollNavbar, {
  name: "Scroll Navbar",
  inputs: []
})

export default ScrollNavbar;
