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

class VideoHeader extends React.Component {


  render() {
    return (
      <>
      <div className="header header-4">
        <div className="header-wrapper">
          <div className="page-header header-video header-filter">
            <div className="overlay" />
            <video
              autoPlay="autoplay"
              loop="loop"
              muted="muted"
              playsInline="playsinline"
            >
              <source
                src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                type="video/mp4"
              />
            </video>
            <Container className="text-center">
              <div className="video-text">
                <h2 className="description">Make it</h2>
                <h1 className="title">Stand out</h1>
                <br />
                <Button
                  className="btn-simple btn-neutral"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Dare for more
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default VideoHeader;
