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
import BlogCard from "components/BlogCard/BlogCard";
import TikTok from 'components/Icons/TikTok'

import RevibeAPI from 'api/revibe.js'

const revibe = new RevibeAPI()

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
      transform: "translate3d(0," + windowScrollTop + "px,0)",
      isLoaded: false,
      blogPosts: []
    };
  }

  async componentDidMount() {
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

    var res = await revibe.getBlogPosts()

    if (res.status === 200) {
      this.setState({
        isLoaded: true,
        blogPosts: res.data.results
      })
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
    const { isLoaded, blogPosts } = this.state;
    const isMobile = window.innerWidth < 576;

    console.log(blogPosts)

    if(isLoaded)
      blogPosts.sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))

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
                    href="https://twitter.com/revibemusic8"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-round btn-icon ml-1"
                    color="primary"
                    href="https://www.instagram.com/revibemusic8/"
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
                {(isLoaded
                  ? blogPosts.map((elem, index) => 
                    <Col lg="4" md="6">
                      {/* TODO: Finish adding all other parts of the response to the cards */}
                      <BlogCard 
                        href={`/blog/${elem.id}`}
                        title={elem.title}
                        description={elem.summary}
                        publishDate={elem['publish_date']}
                        thumbnail={elem.header_image}
                      />
                    </Col>
                    )
                  : 
                    <h1>Loading...</h1>)}
                {/* Clean this out for now <Col lg="4" md="6">
                  <BlogCard 
                    href="/blog/test"
                    thumbnail={require("assets/img/steven-roe.jpg")}
                    title="That’s One Way To Ditch Your Passenger"
                    description="As near as we can tell, this guy must have thought he
                    was going over backwards and tapped the rear..."
                    publishDate="2020-03-16"
                    author="Test Author"
                  />
                </Col>
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
                </Col>*/}
              </Row>
            </Container>

            <div className="subscribe-line subscribe-line-white">
              <Container>
                <Row>
                  <Col lg="6">
                    <h4 className="title">Subscribe to our Mailing List!</h4>
                    <p className="description">
                      Join our mailing list for new music, playlists, and artist interviews!
                    </p>
                  </Col>
                  <Col lg="6">
                    <Card className="card-plain card-form-horizontal">
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
                                  type="text"
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
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="button"
                                onClick={e => e.preventDefault()}
                              >
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
            <div className="social-line social-line-big-icons mb-md">
              <Container>
                <Row className="d-flex justify-content-center">
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://twitter.com/revibemusic8"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://facebook.com/revibemusic8"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <TikTok width="24px" height="24px" color="#7248BD" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://instagram.com/revibemusic8"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
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
