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
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ScrollNavbar from "components/Navbars/ScrollNavbar.jsx";
import Footer from "components/Footers/Footer.jsx";



class ContactUs extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("contact-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("contact-page");
  }
  render() {
    return (
      <>
        <ScrollNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header header-filter contactus-3">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/andre-benz.jpg") + ")"
              }}
            />
            <Container>
              <Row>
                <Col className="text-center" md="12">
                  <h1 className="title">Got a question?</h1>
                  <h3>We'd like to talk more about what you need</h3>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="main">
            <Container fluid>
              <Row className="infos mb-5">
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-primary">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/primary.png")}
                      />
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <h4 className="info-title">Address</h4>
                    <p className="description">8000 Innovation Park Dr.</p>
                    <p className="description">Baton Rouge, LA 70820</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-info">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/info.png")}
                      />
                      <i className="tim-icons icon-email-85" />
                    </div>
                    <h4 className="info-title">Email</h4>
                    <p className="description">support@revibe.tech</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-warning">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/warning.png")}
                      />
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <h4 className="info-title">Phone Number</h4>
                    <p className="description">+1 (318) 550-8799</p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info info-hover">
                    <div className="icon icon-success">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/success.png")}
                      />
                      <i className="tim-icons icon-single-02" />
                    </div>
                    <h4 className="info-title">Contact</h4>
                    <p className="description">Kayne Lynn</p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 mb-4 pt-5">
                <Col className="ml-auto mr-auto text-center mt-5" md="8">
                  <Badge color="info">Leave a message</Badge>
                  <h1 className="title">
                    Tell us more about <b>yourself</b>
                  </h1>
                  <h4 className="desc">
                    Whether you have questions or you would just like to say
                    hello, contact us.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col className="mx-auto" md="10">
                  <Form
                    className="p-3"
                    id="contact-form"
                    method="post"
                    role="form"
                  >
                    <CardBody>
                      <Row>
                        <Col md="6">
                          <label>First name</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.firstNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                              onFocus={e =>
                                this.setState({ firstNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ firstNameFocus: false })
                              }
                            />
                          </InputGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": this.state.lastNameFocus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                                onFocus={e =>
                                  this.setState({ lastNameFocus: true })
                                }
                                onBlur={e =>
                                  this.setState({ lastNameFocus: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
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
                            placeholder="Email Here..."
                            type="text"
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                        />
                      </FormGroup>
                      <Row>
                        <Col className="ml-auto" md="6">
                          <Button
                            className="btn-round pull-right"
                            color="primary"
                          >
                            Send Message
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ContactUs;
