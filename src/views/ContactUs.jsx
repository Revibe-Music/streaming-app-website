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

import { withRouter } from 'react-router-dom';
import RevibeAPI from 'api/revibe.js';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const revibe = new RevibeAPI()

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: ""
    }
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("contact-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("contact-page");
  }

  async onSubmit() {
    var response = await revibe.contactUs(this.state)

    if(response != undefined) {
      MySwal.fire({
        title: 'Thank you for contacting us!',
        text: 'Someone from our team will get back to you soon :)',
        icon: 'success',
        showCloseButton: true,
        background: "#303030"
      })
    } else {
      MySwal.fire({
        title: 'Form not submitted',
        text: 'Please make sure all of the fields in the form are filled out',
        icon: 'error',
        showCloseButton: true,
        background: "#303030"
      })
    }
  }

  onChange(key, value) {
    var newState = {...this.state}
    newState[key] = value
    this.setState(newState)
  }

  render() {
    const SubmitButton = withRouter(({ history }) => (
      <Button
        className="btn-round pull-right"
        color="primary"
        onClick={() => this.onSubmit(history)}
      >
        Send Message
      </Button>
    ));

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
                <Col lg="4">
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
                <Col lg="4">
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
                <Col lg="4">
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
                          <label>First Name</label>
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
                              onChange={e => this.onChange("first_name", e.target.value)}
                            />
                          </InputGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Last Name</label>
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
                                onChange={e => this.onChange("last_name", e.target.value)}
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email Address</label>
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
                            onChange={e => this.onChange("email", e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Subject</label>
                        <Input
                          placeholder="Subject Here..."
                          type="text"
                          onChange={e => this.onChange("subject", e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Your Message</label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                          onChange={e => this.onChange("message", e.target.value)}
                        />
                      </FormGroup>
                      <Row>
                        <Col className="ml-auto" md="6">
                          <SubmitButton />
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
