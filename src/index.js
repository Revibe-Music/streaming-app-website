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
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ReactGA from "react-ga";
import history from "./helpers/history"

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "assets/css/revibe.css";

// presentation pages
import Home from "views/Home.jsx";
import BlogPosts from "views/BlogPosts.jsx";
import BlogPost from "views/BlogPost.jsx";
import AboutUs from "views/AboutUs.jsx";
import ContactUs from "views/ContactUs.jsx";
import Login from "views/Login.jsx";
import Register from "views/Register.jsx";
import Instagram from "views/Instagram.jsx";
import Artist from "views/Artist";
import Error400 from "views/Error400";
import Error404 from "views/Error404";

const trackingId = "UA-101183111-2";
ReactGA.initialize(trackingId);

const hostname = window && window.location && window.location.hostname;

// only track in production env
if(hostname === "revibe.tech") {
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/home" render={props => <Home {...props} />} />
      <Route path="/blogs" render={props => <BlogPosts {...props} />} />
      <Route path="/blog/:id" render={props => <BlogPost {...props} />} />
      <Route path="/about" render={props => <AboutUs {...props} />} />
      <Route path="/contact" render={props => <ContactUs {...props} />} />
      <Route path="/instagram" render={props => <Instagram {...props} />} />
      <Route path="/relink/:id" render={props => <Artist {...props} />} />
      <Route path="/404" render={props => <Error404 {...props} />} />
      {/*<Route path="/login" render={props => <Login {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />*/}
      <Redirect from="/" exact to="/home" />
      <Route path="**" render={props => <Error400 {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
