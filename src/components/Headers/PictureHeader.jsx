/* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

export default class PictureHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/revibe/headerimg.jpg") + ")"
          }}
        />
        <Container className="d-flex flex-column">
          <Row className="mt-auto">
            <Col md="7" xs="14" className="text-center text-md-left">
              <h1 className="title mb-1 mt-4">Stream all of your music in one place.</h1>
              <h1 className="title mb-1 mt-1">Share music with friends.</h1>
              <h1 className="title mt-1 mb-4">Support local artists.</h1>
            </Col>
            <Col md="5" xs="10" className="d-flex justify-content-center ml-auto mr-auto ml-md-0 mr-md-0">
              <Button
                  className="btn-primary btn-lg mt-auto mb-auto ml-md-auto"
                  color="default"
                  href="https://apps.apple.com/app/apple-store/id1500839967?mt=8"
                >
                  <h3 className="title text-white mt-auto mb-auto">Download Revibe Music now!</h3>
                </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}