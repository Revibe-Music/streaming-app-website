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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem
} from "reactstrap";

//core components
import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

export default class Instagram extends React.Component {
  render() {
    return (
      <>
        <ScrollNavbar/>
        <div className="main">
          <div className="mt-lg mb-lg" >
            <Container>
              <Row className="ml-3 mr-3 mt-1 mb-1">
                <Col xs="4" sm="4" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                  <a
                    href="/home"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/winter.jpeg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Col>
                <Col xs="4" sm="4" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                  <a
                    href="/home"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/winter.jpeg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Col>
                <Col xs="4" sm="4" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                  <a
                    href="/home"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/winter.jpeg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Col>
              </Row>
              <Row className="ml-3 mr-3 mt-1 mb-1">
                <Col xs="4" sm="4" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                  <a
                    href="/home"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/winter.jpeg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Col>
                <Col xs="4" sm="4" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                  <a
                    href="/home"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/winter.jpeg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Col>
                <Col xs="4" sm="4" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                  <a
                    href="/home"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      src={require("assets/img/winter.jpeg")}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer/>
        </div>
      </>
    );
  }
}