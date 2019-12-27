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

import { Badge, Button, Container, Row, Col } from "reactstrap";
import Slick from "react-slick";


// core components
import VideoHeader from "components/Headers/VideoHeader.jsx";
import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};


let slickHeader3Settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider slick-buttons-under",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};


class Home extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <div className="header header-4">
          <div className="header-wrapper">
            <ScrollNavbar />
            <VideoHeader />
          </div>
        </div>
        <div className="main">
        {/* ********* FEATURES 1 ********* */}
        <div className="features-1">
          <Container>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/primary.png")}
                    />
                    <i className="tim-icons icon-user-run" />
                  </div>
                  <h4 className="info-title">Social Conversations</h4>
                  <p className="description">
                    Gain access to the demographics, psychographics, and
                    location of unique people.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/success.png")}
                    />
                    <i className="tim-icons icon-atom" />
                  </div>
                  <h4 className="info-title">Analyze Performance</h4>
                  <p className="description">
                    Unify data from Facebook, Instagram, Twitter, LinkedIn,
                    and Youtube to gain rich insights.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <img
                      alt="..."
                      className="bg-blob"
                      src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="tim-icons icon-gift-2" />
                  </div>
                  <h4 className="info-title">Measure Conversions</h4>
                  <p className="description">
                    Track actions taken on your website, understand the impact
                    on your bottom line.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 1 ********* */}
        {/* ********* Start Screenshots Slider ********* */}
        <div className="header header-3">
        // <div className="page-header header-filter">
        <div className="content-center">
          <Row>
            <Col
              className="ml-auto mr-auto positioned"
              lg="5"
              md="8"
              xs="12"
            >
              <h1 className="title">Revibe App</h1>
              <p className="description">
                We let you enjoy your music the way you want. No restrictions. No cost.
              </p>
              <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                Download
              </Button>
            </Col>
            <Col md="12">
              <Slick {...slickHeader3Settings}>
                <div>
                  <img
                    alt="..."
                    src={require("assets/img/app1.png")}
                    width="300"
                  />
                </div>
                <div>
                  <img
                    src={require("assets/img/app2.png")}
                    width="150"
                  />
                </div>
                <div>
                  <img
                    alt="..."
                    src={require("assets/img/app3.png")}
                    width="150"
                  />
                </div>
                <div>
                  <img
                    alt="..."
                    src={require("assets/img/app4.png")}
                    width="150"
                  />
                </div>
                <div>
                  <img
                    alt="..."
                    src={require("assets/img/app5.png")}
                    width="150"
                  />
                </div>
              </Slick>
            </Col>
          </Row>
          </div>
          // </div>
        </div>
        {/* ********* END Screenshots Slider ********* */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
