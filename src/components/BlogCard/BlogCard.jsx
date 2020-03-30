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
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import truncate from "truncate";

export default class BlogCard extends React.Component {
  constructor(props) {
    super(props)
  }

  getTypeFromDisplayStyle(style) {
    switch(style) {
      case 1: {
        return {
          tag: "Artist of the Week",
          color: "info"
        }
      }
      default: {
        return {
          tag: "Blog",
          color: "primary"
        }
      }
    }
  }

  render() {
    var date, tag

    if(this.props.publishDate)
      date = new Date(this.props.publishDate)

    if(this.props.displayStyle)
      tag = this.getTypeFromDisplayStyle(this.props.displayStyle)

    return (
      <Card className="card-blog card-plain">
        <div className="card-image" style={{height: "350px", width: "350px", overflow: "hidden"}}>
          <a href={this.props.href}>
            <img
              alt="..."
              className="img rounded"
              src={this.props.thumbnail ? this.props.thumbnail : require("assets/img/steven-roe.jpg")}
              style={{width: "auto", height: "auto"}}
            />
          </a>
        </div>
        <CardBody>
          <h6 className={`category text-${tag.color}`}>{tag.tag}</h6>
          <CardTitle tag="h4">
            <a href={this.props.href}>
              {this.props.title}
            </a>
          </CardTitle>
          <div style={{ height: "50px" }}>
            <p className="card-description">
              {this.props.description ? truncate(this.props.description, 144) : "UH OH! Somebody forgot to include the damn summary!"}
            </p>
          </div>
          <CardFooter>
            <Container>
              <Row style={{ width: "100%" }}>
                <Col md="6" xs="6" className="pl-0 pr-0 align-top">
                  {this.props.author ? <div className="author mt-1">
                    {this.props.authorImg ? <img
                      alt="..."
                      className="avatar img-raised"
                      src={this.props.authorImg}
                    /> : null}
                    <span className={`${this.props.authorImg ? "ml-1" : ""}`}>{this.props.author}</span>
                  </div> : null}
                </Col>
                <Col md="6" xs="6" className="pl-0 pr-0 ml-auto">
                  {this.props.publishDate ? <div className="stats stats-right">
                    <i className="tim-icons icon-calendar-60 mb-1" />{`${date.toLocaleString('default', { month: 'short' })} ${date.getUTCDate()}, ${date.getUTCFullYear()}`}
                  </div> : null}
                </Col>
              </Row>
            </Container>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}