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

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import Icon from "../Icons/icons";

class Footer extends React.Component {
  render() {
    const isMobile = window.innerWidth < 576

    return (
      <>
        <footer className="footer">
          <Container>
            <Row className="d-flex align-items-center">
              <Col md="3" className={`d-flex flex-${isMobile ? "column" : "row"}`}>
                {isMobile ? 
                  <>
                    <h2 className={`title text-white mt-0 mb-0`}>Relink</h2>
                    <h6 className={`text-white mt-auto mb-auto`} style={{ textTransform: "none" }}>by</h6>
                    <img src={require("../../assets/img/revibetransparent.png")} style={{ width: 150 }} className={`mt-auto mb-auto ${isMobile ? " ml-auto mr-auto" : ""}`} />
                  </>
                :
                  <>
                    <h1 className={`title text-white mt-0 mb-0 mr-1`}>Relink</h1>
                    <h5 className={`text-white mt-auto mb-auto ml-2`}>by</h5>
                    <img src={require("../../assets/img/revibetransparent.png")} style={{ width: 175 }} className={`mt-auto mb-auto ${isMobile ? " ml-auto mr-auto" : ""}`} />
                  </>
                }
              </Col>
              <Col md="6" xs="12">
                <Nav className="pull-center mt-auto mb-auto pt-0">
                  <ul>
                    <li>
                      <NavLink to="/home" tag={Link}>
                        Revibe Music
                      </NavLink>
                    </li>
                    {/*<li>
                      <NavLink to="/about" tag={Link} className="ml-1">
                        About Us
                      </NavLink>
                    </li>*/}
                    <li>
                      <a href="https://artist.revibe.tech" target="_blank" className="ml-1">
                        Revibe Artists
                      </a>
                    </li>
                  </ul>
                </Nav>
              </Col>
              {/*<Col md="3" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink to="/home" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/about" tag={Link}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <a href="https://artist.revibe.tech">
                      For Artists
                    </a>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="3" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink to="/contact" tag={Link}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/blogs" tag={Link}>
                      Blog
                    </NavLink>
                  </NavItem>
                  {/* Keep register disabled until auth and stuff is working on front side   <NavItem>
                    <NavLink to="/register" tag={Link}>
                      Register
                    </NavLink>
                  </NavItem>}
                </Nav>
              </Col>*/}
              <Col md="3">

              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
