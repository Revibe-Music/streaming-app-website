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
//ReactStrap
import { 
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Table
} from "reactstrap";
import { FaUserTag, FaTshirt, FaStore, FaUser } from 'react-icons/fa'
import { GoCloudUpload } from 'react-icons/go'
import { DiGoogleAnalytics } from 'react-icons/di'
import { MdAttachMoney } from 'react-icons/md'

// core components
import VideoHeader from "components/Headers/VideoHeader.jsx";
import PictureHeader from "components/Headers/PictureHeader.jsx";
import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";
import MailChimpForm from "components/Forms/Mailchimp";
import MetaHelmet from "components/MetaHelmet/MetaHelmet";
import Icon from "components/Icons/icons";

class Home extends React.Component {
  state = {
    collapse: 1
  };

  openCollapse = collapse => {
    this.setState({
      collapse: this.state.collapse === collapse ? -1 : collapse
    });
  };

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
    const isMobile = window.innerWidth < 576;

    return (
      <>
        <MetaHelmet url={window.location} />
        <div className="wrapper" ref="wrapper">
          <div className="header header-3">
            <div className="header-wrapper">
              <ScrollNavbar />
              {/*<VideoHeader />*/}
              <PictureHeader />
            </div>
          </div>
          <div className="main">
            {/* Features 1 */}
            <div className="features-1">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <h1 className="title">Never switch between music apps again.</h1>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-zoom-split" />
                      </div>
                      <h4 className="info-title">One search bar to find music on any service</h4>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-bullet-list-67" />
                      </div>
                      <h4 className="info-title">Cross platform playlists with all your favorite songs</h4>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-sound-wave" />
                      </div>
                      <h4 className="info-title">Queue songs from any source without interruption</h4>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* End Features 1 */}
            {/* Features 4 */}
            <div className="features-4">
              <Container>
                <Row className="align-items-center">
                  <Col className="mr-auto text-left" lg="3">
                    <h1 className="title">Your Music&#8212;Your Way</h1>
                    <p className="description">
                      Revibe Music is built for music lovers and has all the features
                      you need to enjoy the music you want.
                    </p>
                    {!isMobile ? 
                      <Button
                        className="mt-3"
                        color="primary"
                        href="https://apps.apple.com/app/apple-store/id1500839967?mt=8"
                        target="_blank"
                      >
                        Download Now <i className="tim-icons icon-minimal-right" />
                      </Button>
                      :
                      <div style={{ width: "100%" }} className="d-flex justify-content-center">
                        <Button
                          className="mt-3 ml-auto mr-auto"
                          color="primary"
                          href="https://apps.apple.com/app/apple-store/id1500839967?mt=8"
                          target="_blank"
                        >
                          Download Now <i className="tim-icons icon-minimal-right" />
                        </Button>
                      </div>
                    }
                  </Col>
                  <Col className="p-sm-0" lg="8">
                    <Row>
                      <Col md="6">
                        <div className="info info-primary" style={{ height: 300 }}>
                          <div className="icon icon-white">
                            <i className="tim-icons icon-headphones" />
                          </div>
                          <h4 className="info-title">Manage One Library</h4>
                          <p className="description">
                            Add songs to your library from all available services.
                            Browse all of your music, or filter by a specific platform.
                          </p>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="info info-primary" style={{ height: 300 }}>
                          <div className="icon icon-white">
                            <i className="tim-icons icon-triangle-right-17" />
                          </div>
                          <h4 className="info-title">Cross-Platform Playlists</h4>
                          <p className="description">
                            Playlists can include songs from Revibe, YouTube, and Spotify. Start from scratch or import
                            an existing palylist from Spotify to begin!
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="info info-primary" style={{ height: 300 }}>
                          <div className="icon icon-white">
                            <i className="tim-icons icon-sound-wave" />
                          </div>
                          <h4 className="info-title">Advanced Queue</h4>
                          <p className="description">
                            Queue songs from any soruce without interruption.
                            Rearrange or remove songs and view what's up next.
                          </p>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="info info-primary" style={{ height: 300 }}>
                          <div className="icon icon-white">
                            <i className="tim-icons icon-send" />
                          </div>
                          <h4 className="info-title">Share With Friends</h4>
                          <p className="description">
                            Coming Soon! Send songs to friends with in app direct messaging.
                            Our direct messaging will allow you to FINALLY share music from
                            Apple to Spotify, and vice versa.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* End Features 4 */}
            {/* Accordion */}
            <div className="accordion-1">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <h1 className="title mb-4 mt-5">Frequently Asked Questions</h1>
                    <div className="section-space" />
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-auto" md="12">
                    <div className="accordion mt-2 mb-sm">
                      <Card className="custom-accordion">
                        <CardHeader>
                          <h5 className="mb-0">
                            <Button
                              className="w-100 text-left text-primary"
                              color="link"
                              aria-expanded={this.state.collapse === 1}
                              onClick={() => this.openCollapse(1)}
                            >
                              How much does Revibe Music cost?{" "}
                              <i className="tim-icons icon-minimal-down float-right" />
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse === 1}>
                          <CardBody className="text-white">
                            Nothing! Revibe Music is free and always will be.
                            For the best experience, connect your premium Spotify account.
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="custom-accordion other-cards">
                        <CardHeader>
                          <h5 className="mb-0">
                            <Button
                              className="w-100 text-left text-primary"
                              color="link"
                              aria-expanded={this.state.collapse === 2}
                              onClick={() => this.openCollapse(2)}
                            >
                              What if I don't have a premium subscription?{" "}
                              <i className="tim-icons icon-minimal-down float-right" />
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse === 2}>
                          <CardBody className="text-white">
                            It's okay! You can still use Revibe to stream our uploads and YouTube's catalog.
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="custom-accordion other-cards">
                        <CardHeader>
                          <h5 className="mb-0">
                            <Button
                              className="w-100 text-left text-primary"
                              color="link"
                              aria-expanded={this.state.collapse === 3}
                              onClick={() => this.openCollapse(3)}
                            >
                              What music services are available through Revibe Music?{" "}
                              <i className="tim-icons icon-minimal-down float-right" />
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse === 3}>
                          <CardBody className="text-white">
                            Revibe Music currently supports Spotify, with Apple Music coming soon.
                            If you would like us to add any other services, please let us know here.
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="custom-accordion other-cards">
                        <CardHeader>
                          <h5 className="mb-0">
                            <Button
                              className="w-100 text-left text-primary"
                              color="link"
                              aria-expanded={this.state.collapse === 4}
                              onClick={() => this.openCollapse(4)}
                            >
                              Can I play YouTube videos in the background? {" "}
                              <i className="tim-icons icon-minimal-down float-right" />
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse === 4}>
                          <CardBody className="text-white">
                            Unfortunately YouTube videos cannot be played in the background in accordance with their terms of service.
                            To provide a smooth user experience Revibe Music offers a setting to skip
                            YouTube videos when shufﬂing or playing a playlist if the device is locked.
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="custom-accordion other-cards">
                        <CardHeader>
                          <h5 className="mb-0">
                            <Button
                              className="w-100 text-left text-primary"
                              color="link"
                              aria-expanded={this.state.collapse === 5}
                              onClick={() => this.openCollapse(5)}
                            >
                              How do I upload my music to Revibe?{" "}
                              <i className="tim-icons icon-minimal-down float-right" />
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse === 5}>
                          <CardBody className="text-white">
                            If you are an artist you can upload your music to Revibe,
                            view analytics, and more on Revibe Artists!
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* End Accordion */}
            {/* Features 2 */}
            <div className="features-2">
              <Container>
                <Row className="align-items-center">
                  <Col className="mr-auto text-left" lg="3" md="8">
                    <h1 className="title">Revibe Artists</h1>
                    <p className="description">
                      If you are an independent musician, or thinking about making your ﬁrst song, you need to be on Revibe Artists.
                      We make the music business as simple as possible so you can spend more time making music.
                    </p>
                    {!isMobile ? 
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="https://artist.revibe.tech"
                      target="_blank"
                    >
                      Join Revibe Artists
                    </Button>
                      :
                    <div style={{ width: "100%" }} className="d-flex justify-content-center">
                      <Button
                        className="btn-simple ml-auto mr-auto"
                        color="primary"
                        href="https://artist.revibe.tech"
                        target="_blank"
                      >
                        Join Revibe Artists
                      </Button>
                    </div>
                    }
                  </Col>
                  <Col lg="8" md="12">
                    <Row>
                      <Col lg="4" md="4">
                        <div className="info text-left bg-info" style={{ height: "320px" }}>
                          <div className="icon icon-white">
                            <GoCloudUpload fontSize="30px" />
                          </div>
                          <h4 className="info-title">Upload Tracks</h4>
                          <p className="description">
                            Host your tracks on our servers to be streamed for free on the Revibe Music app.
                          </p>
                        </div>
                      </Col>
                      <Col lg="4" md="4">
                        <div className="info text-left bg-danger info-raised" style={{ height: "320px" }}>
                          <div className="icon icon-white">
                            <FaUserTag fontSize="30px" />
                          </div>
                          <h4 className="info-title">Tag Contributors</h4>
                          <p className="description">
                            Tag the producers, featured artists, engineers, graphic designers,
                            and more so that everyone gets credit.
                          </p>
                        </div>
                      </Col>
                      <Col lg="4" md="4">
                        <div className="info text-left bg-default" style={{ height: "320px" }}>
                          <div className="icon icon-white">
                            <DiGoogleAnalytics fontSize="30px" />
                          </div>
                          <h4 className="info-title">View Analytics</h4>
                          <p className="description">
                            Advanced insights based on combined streaming, sharing,
                            distribution, marketplace, and merchandise data. 
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4" md="4">
                        <div className="info text-left bg-primary" style={{ height: "320px" }}>
                          <MdAttachMoney className="icon icon-white" fontSize="30px" />
                          <p className="description float-right"><bold>Coming Soon!</bold></p>
                          <h4 className="info-title">Digital Distribution</h4>
                          <p className="description">
                            Distribute your music to streaming services
                            like Spotify to generate royalties from your music.
                          </p>
                        </div>
                      </Col>
                      <Col lg="4" md="4">
                        <div className="info text-left bg-warning info-raised" style={{ height: "320px" }}>
                          <FaStore className="icon icon-white" fontSize="30px" />
                          <p className="description float-right"><bold>Coming Soon!</bold></p>
                          <h4 className="info-title">Marketplace</h4>
                          <p className="description">
                            Buy and sell beats, cover art, features,
                            engineering services, and more on our collaboration marketplace. 
                          </p>
                        </div>
                      </Col>
                      <Col lg="4" md="4">
                        <div className="info text-left bg-success" style={{ height: "320px", backgroundColor: "teal" }}>
                          <FaTshirt className="icon icon-white" fontSize="30px" />
                          <p className="description float-right"><bold>Coming Soon!</bold> </p>
                          <h4 className="info-title">
                            Sell Merch
                          </h4>
                          <p className="description">
                            Upload a design and begin selling!
                            On demand, drop shipped merchandise means no up front costs and no oder processing on your end.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <MailChimpForm />
            <div className="social-line social-line-big-icons">
              <Container>
                <Row className="d-flex justify-content-center">
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://instagram.com/revibemusic8"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://twitter.com/revibemusic8"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://facebook.com/revibemusic8"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://vm.tiktok.com/GYQojE/"
                      target="_blank"
                    >
                      <Icon icon="tiktok" width="24px" height="24px" color="#7248BD" />
                    </Button>
                  </Col>
                  <Col md="2" className={`${isMobile ? "border-right-0" : ""}`}>
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="primary"
                      href="https://www.youtube.com/channel/UCGSz0umIQ-xCKB8UsGKDK3A"
                      target="_blank"
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <br/>
            <br/>
            {/*<Container className="mt-lg mb-lg">
              <Row className="mb-lg">
                <Col md="6">
                  <img
                    alt="..."
                    src={require("assets/img/app3.png")}
                    className="d-block ml-auto mr-auto"
                    style={{ width: "75%" }}
                  />
                </Col>
                <Col md="6" className="pt-sm pt-md-0 pb-md-0 mt-md-auto mb-md-auto">
                  <h2 className="text-primary text-title text-md-left text-center">One Library</h2>
                  <p className="text-seconday description">
                    All your music in one place. That's right. Spotify, YouTube, and Revibe - all on Revibe Music.
                    <br/>
                    <br/>
                    Log into your Premium Spotify account to get started, or enjoy YouTube and Revibe for free!
                  </p>
                  <br/>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="btn-simple btn-primary"
                      color="default"
                      href="https://apps.apple.com/app/apple-store/id1500839967?mt=8"
                    >
                      Download Revibe Music
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row className="mb-lg">
                <Col md="6" className="mr-0 order-md-2 order-sm-1">
                  <img
                    alt="..."
                    src={require("assets/img/app3.png")}
                    className="d-block ml-auto mr-auto"
                    style={{ width: "75%" }}
                  />
                </Col>
                <Col md="6" className="order-md-1 order-sm-2 pt-sm pt-md-0 pb-md-0 mt-md-auto mb-md-auto">
                  <h2 className="text-primary text-title text-md-left text-center">It's THAT Easy!</h2>
                  <p className="text-seconday description">
                  Accessing all of your favorite music has never been easier. Search all platforms at the same time.
                  Creating playlists and queueing songs has never been easier!
                  </p>
                  <br/>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="btn-simple btn-primary"
                      color="default"
                      href="https://apps.apple.com/app/apple-store/id1500839967?mt=8"
                    >
                      Download Revibe Music
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <img
                    alt="..."
                    src={require("assets/img/app3.png")}
                    className="d-block ml-auto mr-auto"
                    style={{ width: "75%" }}
                  />
                </Col>
                <Col md="6" className="pt-sm pt-md-0 pb-md-0 mt-md-auto mb-md-auto">
                  <h2 className="text-primary text-title text-md-left text-center">Empty Informational</h2>
                  <p className="text-seconday description">
                    Text here is TBD! STILL go download Revibe Music!
                  </p>
                  <br/>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="btn-simple btn-primary"
                      color="primary"
                      href="https://apps.apple.com/app/apple-store/id1500839967?mt=8"
                    >
                      Download Revibe Music
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row className="mt-md mb-md" />
              <Row className="mt-md d-flex justify-content-center">
                <h1 className="text-center text-title text-primary">Download Revibe Music NOW!</h1>
              </Row>
              <Row className="mt-1 mb-md d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  <Button
                    className="btn-primary btn-lg"
                    color="default"
                    href="https://apps.apple.com/app/apple-store/id1500839967?mt=8"

                  >
                    <strong>Sign Up for Revibe Music</strong>
                  </Button>
                </div>
              </Row>
            </Container>*/}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
