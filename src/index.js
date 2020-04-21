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
import Routes from './routes'

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "assets/css/revibe.css";

import { builder, BuilderComponent } from '@builder.io/react';
builder.init("9f839cd6c49b4dc0966d1d4ce892eecd");

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
    {Routes}
  </Router>,
  document.getElementById("root")
);
