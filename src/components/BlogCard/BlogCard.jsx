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
  CardTitle
} from "reactstrap";

export default class BlogCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var date

    if(this.props.publishDate)
      date = new Date(this.props.publishDate)

    return (
      <Card className="card-blog card-plain">
        <div className="card-image" style={{height: "350px", width: "350px"}}>
          <a href={this.props.href}>
            <img
              alt="..."
              className="img rounded"
              src={this.props.thumbnail ? this.props.thumbnail : require("assets/img/steven-roe.jpg")}
            />
          </a>
        </div>
        <CardBody>
          <h6 className={`category text-${(this.props.tagColor ? this.props.tagColor : "primary")}`}>{this.props.tag ? this.props.tag : "Blog"}</h6>
          <CardTitle tag="h4">
            <a href={this.props.href}>
              {this.props.title}
            </a>
          </CardTitle>
          <p className="card-description">
            {this.props.description ? this.props.description : "UH OH! Somebody forgot to include the damn summary!"}
          </p>
          <CardFooter>
            {this.props.author ? <div className="author">
              {this.props.authorImg ? <img
                alt="..."
                className="avatar img-raised"
                src={this.props.authorImg}
              /> : null}
              <span className="ml-1">{this.props.author}</span>
            </div> : null}
            {this.props.publishDate ? <div className="stats stats-right">
              <i className="tim-icons icon-calendar-60" />{`${date.toLocaleString('default', { month: 'short' })} ${date.getUTCDate()}, ${date.getUTCFullYear()}`}
            </div> : null}
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
}