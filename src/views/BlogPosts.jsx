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
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    let windowScrollTop;
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("blog-posts");
    if (window.innerWidth >= 768) {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: "translate3d(0," + windowScrollTop + "px,0)"
      });
      window.addEventListener("scroll", this.resetTransform);
    }
  }
  componentWillUnmount() {
    document.body.classList.remove("blog-posts");
    if (window.innerWidth >= 768) {
      window.removeEventListener("scroll", this.resetTransform);
    }
  }
  resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  };
  render() {
    return (
      <>
        <ScrollNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header page-header-small header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/record.jpg") + ")",
                transform: this.state.transform
              }}
            />
            <div className="content-center">
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h1 className="title">
                    A collection of badass musicians.
                  </h1>
                  <Button
                    className="btn-round btn-icon"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-round btn-icon ml-1"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
          <div className="main main-raised">
            <Container>
              <Row>
                <Col lg="4" md="6">
                  <Card className="card-blog card-plain">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/steven-roe.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-primary">Features</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          That’s One Way To Ditch Your Passenger
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        As near as we can tell, this guy must have thought he
                        was going over backwards and tapped the rear...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/p10.jpg")}
                          />
                          <span className="ml-1">Mike John</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="tim-icons icon-watch-time" /> 5 min read
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="card-blog card-plain">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/noah-wetering.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-info">Animals</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Shark Week: How to Watch It Like a Scientist
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Just when you thought it was safe to turn on your
                        television, the Discovery Channel's "Shark Week"...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/johana.jpg")}
                          />
                          <span className="ml-1">Johanna Zmud</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="tim-icons icon-watch-time" /> 5 min read
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="card-blog card-plain">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/mark-harrison.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-warning">Cars</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Who's Afraid of the Self-Driving Car?
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        It's been 60 years since the cover of Popular Mechanics
                        magazine gave us the promise of flying cars...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/christian.jpg")}
                          />
                          <span className="ml-1">Marc Oliver</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="tim-icons icon-heart-2" /> 2.4K
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/pawel-nolbert.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-info">Enterprise</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/olivia.jpg")}
                        />
                        <span className="ml-1">Anna Spark</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/serge-kutuzov.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-success">Startups</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Lyft launching cross-platform service this week
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/michael.jpg")}
                        />
                        <span className="ml-1">John Black</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="card-plain card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/1234.png")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-danger">
                        <i className="now-ui-icons media-2_sound-wave" />
                        Enterprise
                      </h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          6 insights into the French Fashion landscape
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/james.jpg")}
                        />
                        <span className="ml-1">James Newman</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>

            <div className="title text-center">
              <h3>Show us some love</h3>
            </div>
            <div className="social-line social-line-big-icons">
              <Container>
                <Row>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="youtube"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-instagram btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="subscribe-line">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" lg="8" xs="10">
                    <div className="text-center">
                      <h4 className="title">Subscribe to our Newsletter</h4>
                      <p className="description">
                        Join our newsletter and get news in your inbox every
                        week! We hate spam too, so no worries about this.
                      </p>
                    </div>
                    <Card className="card-raised card-form-horizontal">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col sm="8">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state.emailFocus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-email-85" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Your Email..."
                                  type="email"
                                  onFocus={e =>
                                    this.setState({ emailFocus: true })
                                  }
                                  onBlur={e =>
                                    this.setState({ emailFocus: false })
                                  }
                                />
                              </InputGroup>
                            </Col>
                            <Col sm="4">
                              <Button block color="primary" type="button">
                                Subscribe
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default BlogPosts;
