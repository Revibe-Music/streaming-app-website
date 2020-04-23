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

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Footer from "components/Footers/Footer.jsx";

class Error400 extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.location.state === undefined)
      window.location.href = "/"

    const { state } = this.props.location

    if(!state.status_code || !state.detail)
    window.location.href = "/"

    return (
      <>
        <div className="wrapper" ref="wrapper" style={{paddingTop: "100px"}}> 
          <div className="page-header">
            <Container>
              <Row className="align-items-center">
                <Col lg="6">
                  <div className="featured-image">
                    <img
                      alt="..."
                      height="600"
                      src={require("assets/img/max.jpg")}
                    />
                  </div>
                </Col>
                <Col className="mt-md-5" lg="6">
                  <a href="/">
                  <img style={{paddingLeft: "155px"}} src={require("assets/img/revibetransparent.png")}/>
                  </a>
                  <h1 className="mt-md-5 title text-center text-primary">{state.status_code} Error<br/>This is awkward</h1>
                  <Row>
                    <Col lg="12">
                      <div>
                        <h4 className="info text-center text-primary"> We're Sorry</h4>
                        <p className="content info text-center">
                          It looks like we could not process your request at this time, please try again later!
                          <br/>
                          Error: {state.detail}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            </div>
          </div>
          <Footer />
      </>
    );
  }
}

export default Error400;
