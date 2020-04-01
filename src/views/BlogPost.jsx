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
  CardFooter,
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

import RevibeAPI from "api/revibe"

const revibe = new RevibeAPI()

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      blogPost: null
    }
  }
  
  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("blog-post");

    var res = await revibe.getBlogPost(this.props.match.params.id)

    if (res.status === 200) {
      this.setState({
        isLoaded: true,
        blogPost: res.data
      })
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("blog-post");
  }

  render() {
    const { isLoaded, blogPost } = this.state
    const isMobile = window.innerWidth < 576

    let date = null

    if(blogPost != null)
      date = new Date(blogPost.publish_date)

    if(blogPost){
      console.log(blogPost)
    }

    return (
      <>
        <ScrollNavbar />
        <div className="wrapper" ref="wrapper">
          {isLoaded
          ?
          <>
            <div className="page-header header-filter">
              <div
                className="page-header-image"
                data-parallax={true}
                style={{
                  backgroundImage:
                    "url(" + (blogPost.header_image ? blogPost.header_image : require("assets/img/claudia-ramirez.jpg")) + ")"
                }}
              />
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <h1 className="title" style={{ fontFamily:"FuturaHeavy", fontSize: (isMobile ? "3rem" : "8.5rem") }}>{blogPost.title}</h1>
                    {/*<div className="author">
                      <img
                        alt="..."
                        className="avatar img-raised"
                        src={require("assets/img/p10.jpg")}
                      />
                    </div>*/}
                    <br />
                    <h4 className="description">{blogPost.author ? blogPost.author : "No Author"}</h4>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="section">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <h6 className="category">{`${date.toLocaleString("default", {month: "long"})} ${date.getUTCDate()}, ${date.getUTCFullYear()}`}</h6>
                    {/<\/?[a-z][\s\S]*>/i.test(blogPost.body)
                    ?
                      <div dangerouslySetInnerHTML={{ __html: blogPost.body }} />
                    :
                      <p type="description text-white" style={{ whiteSpace: "pre-wrap" }}>{blogPost.body}</p>
                    }
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="section section-blog-info">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Row>
                      <Col md="10">
                        <div className="blog-tags">
                          Tags:  
                          {blogPost.tags.map((item, key) => <Badge color="primary" className="mr-1">{item.text}</Badge>)}
                        </div>
                      </Col>
                      <hr />
                      {/* Author Card <Col className="ml-auto mr-auto" md="8">
                        <Card className="card-profile profile-bg">
                          <CardHeader>
                            <div className="card-avatar">
                              <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                  alt="..."
                                  className="img img-raised"
                                  src={require("assets/img/lora.jpg")}
                                />
                              </a>
                            </div>
                          </CardHeader>
                          <CardBody>
                            <CardTitle tag="h3">Melanie Paisley</CardTitle>
                            <h6 className="category text-primary">Writer</h6>
                            <p className="card-description">
                              Over the years, advancement in CRM technology has
                              reshaped the way SMBs and SMEs manage their
                              workflows...
                            </p>
                          </CardBody>
                          <CardFooter>
                            <div className="follow float-left">
                              <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                size="sm"
                              >
                                Follow
                              </Button>
                            </div>
                            <div className="d-inline float-right">
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="dribbble"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fab fa-dribbble" />
                              </Button>
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="linkedin"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fab fa-linkedin" />
                              </Button>
                              <Button
                                className="btn-icon btn-round"
                                color="behance"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fab fa-behance" />
                              </Button>
                            </div>
                          </CardFooter>
                        </Card>
                      </Col>*/}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*<div className="section section-comments">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <div className="media-area">
                      <h3 className="title text-center">3 Comments</h3>
                      <Media>
                        <a
                          className="pull-left"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <div className="avatar">
                            <Media
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/james.jpg")}
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading tag="h5">
                            Tina Andrew{" "}
                            <small className="text-muted">· 7 minutes ago</small>
                          </Media>
                          <p>
                            Chance too good. God level bars. I'm so proud of
                            @LifeOfDesiigner #1 song in the country. Panda! Don't
                            be scared of the truth because we need to restart the
                            human foundation in truth I stand with the most
                            humility. We are so blessed!
                          </p>
                          <p>
                            All praises and blessings to the families of people
                            who never gave up on dreams. Don't forget, You're
                            Awesome!
                          </p>
                          <div className="media-footer">
                            <Button
                              className="btn-simple pull-right"
                              color="primary"
                              href="#pablo"
                              id="tooltip341431465"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              <i className="tim-icons icon-send" /> Reply
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip341431465"
                            >
                              Reply to Comment
                            </UncontrolledTooltip>
                            <Button
                              className="btn-simple pull-right"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              <i className="tim-icons icon-heart-2" /> 243
                            </Button>
                          </div>
                        </Media>
                      </Media>
                      <Media>
                        <a
                          className="pull-left"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <div className="avatar">
                            <Media
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/michael.jpg")}
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading tag="h5">
                            John Camber{" "}
                            <small className="text-muted">· Yesterday</small>
                          </Media>
                          <p>
                            Hello guys, nice to have you on the platform! There
                            will be a lot of great stuff coming soon. We will keep
                            you posted for the latest news.
                          </p>
                          <p>Don't forget, You're Awesome!</p>
                          <div className="media-footer">
                            <Button
                              className="btn-simple pull-right"
                              color="primary"
                              href="#pablo"
                              id="tooltip871944617"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              <i className="tim-icons icon-send" /> Reply
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip871944617"
                            >
                              Reply to Comment
                            </UncontrolledTooltip>
                            <Button
                              className="btn-simple pull-right"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              <i className="tim-icons icon-heart-2" /> 243
                            </Button>
                          </div>
                          <Media>
                            <a
                              className="pull-left"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <div className="avatar">
                                <Media
                                  alt="..."
                                  className="img-raised"
                                  src={require("assets/img/julie.jpg")}
                                />
                              </div>
                            </a>
                            <Media body>
                              <Media heading tag="h5">
                                Tina Andrew{" "}
                                <small className="text-muted">· 2 Days Ago</small>
                              </Media>
                              <p>
                                Hello guys, nice to have you on the platform!
                                There will be a lot of great stuff coming soon. We
                                will keep you posted for the latest news.
                              </p>
                              <p>Don't forget, You're Awesome!</p>
                              <div className="media-footer">
                                <Button
                                  className="btn-simple pull-right"
                                  color="primary"
                                  href="#pablo"
                                  id="tooltip442113005"
                                  onClick={e => e.preventDefault()}
                                  size="sm"
                                >
                                  <i className="tim-icons icon-send" /> Reply
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip442113005"
                                >
                                  Reply to Comment
                                </UncontrolledTooltip>
                                <Button
                                  className="btn-simple pull-right"
                                  color="danger"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                  size="sm"
                                >
                                  <i className="tim-icons icon-heart-2" /> 243
                                </Button>
                              </div>
                            </Media>
                          </Media>
                        </Media>
                      </Media>
                    </div>
                    <h3 className="title text-center">Post your comment</h3>
                    <Media className="media-post">
                      <a
                        className="pull-left author"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/olivia.jpg")}
                          />
                        </div>
                      </a>
                      <Media body>
                        <Input
                          placeholder="Write a nice reply or go home..."
                          rows="4"
                          type="textarea"
                        />
                        <div className="media-footer">
                          <Button
                            className="pull-right"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Reply
                          </Button>
                        </div>
                      </Media>
                    </Media>
                    {/* end media-post }
                  </Col>
                </Row>
              </Container>
            </div>*/}
            {/*<div className="section">
              <Container>
                <Col md="12">
                  <h2 className="title text-center">Related Stories</h2>
                  <br />
                  <div className="blogs-1">
                    <Row>
                      <Col className="ml-auto mr-auto" md="12">
                        <Card className="card-blog card-plain blog-horizontal">
                          <Row>
                            <Col lg="4">
                              <div className="card-image">
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  <img
                                    alt="..."
                                    className="img rounded"
                                    src={require("assets/img/trae-gould.jpg")}
                                  />
                                </a>
                              </div>
                            </Col>
                            <Col lg="8">
                              <CardBody>
                                <CardTitle tag="h3">
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    MateLabs mixes machine learning with IFTTT
                                  </a>
                                </CardTitle>
                                <p className="card-description">
                                  If you’ve ever wanted to train a machine
                                  learning model and integrate it with IFTTT, you
                                  now can with a new offering from MateLabs.
                                  MateVerse, a platform where novices can spin out
                                  machine...If you’ve ever wanted to train a
                                  machine learning model and integrate it with
                                  IFTTT, you now can with a new offering from
                                  MateLabs. MateVerse, a platform where novices
                                  can spin out machine...{" "}
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Read More
                                  </a>
                                </p>
                                <div className="author">
                                  <img
                                    alt="..."
                                    className="avatar img-raised"
                                    src={require("assets/img/james.jpg")}
                                  />
                                  <div className="text">
                                    <span className="name">Tom Hanks</span>
                                    <div className="meta">Drawn on 23 Jan</div>
                                  </div>
                                </div>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                        <Card className="card-blog card-plain blog-horizontal">
                          <Row>
                            <Col lg="4">
                              <div className="card-image">
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  <img
                                    alt="..."
                                    className="img rounded"
                                    src={require("assets/img/mark-harrison.jpg")}
                                  />
                                </a>
                              </div>
                            </Col>
                            <Col lg="8">
                              <CardBody>
                                <CardTitle tag="h3">
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    US venture investment ticks up in Q2 2017
                                  </a>
                                </CardTitle>
                                <p className="card-description">
                                  Venture investment in U.S. startups rose
                                  sequentially in the second quarter of 2017,
                                  boosted by large, late-stage financings and a
                                  few outsized early-stage rounds in tech and
                                  healthcare..enture investment in U.S. startups
                                  rose sequentially in the second quarter of 2017,
                                  boosted by large, late-stage financings and a
                                  few outsized early-stage rounds in tech and
                                  healthcare..{" "}
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Read More
                                  </a>
                                </p>
                                <div className="author">
                                  <img
                                    alt="..."
                                    className="avatar img-raised"
                                    src={require("assets/img/michael.jpg")}
                                  />
                                  <div className="text">
                                    <span className="name">Tom Hanks</span>
                                    <div className="meta">Drawn on 23 Jan</div>
                                  </div>
                                </div>
                              </CardBody>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Container>
            </div>*/}
          </>
          :
          <div>
            <h1 className="title text-primary">Loading...</h1>
          </div>
          }
          <Footer />
        </div>
      </>
    );
  }
}