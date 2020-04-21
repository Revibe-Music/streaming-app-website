import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

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
import CatchAllPage from "views/CatchAll";


export default (
  <Switch>
    <Route path="/home" render={props => <Home {...props} />} />
    <Route path="/blog" exact render={props => <BlogPosts {...props} />} />
    <Route path="/blog/:id" render={props => <BlogPost {...props} />} />
    <Route path="/about" render={props => <AboutUs {...props} />} />
    <Route path="/contact" render={props => <ContactUs {...props} />} />
    <Route path="/instagram" render={props => <Instagram {...props} />} />
    <Route path="/relink/:id" render={props => <Artist {...props} />} />
    <Route path="/404" render={props => <Error404 {...props} />} />
    <Route path="/page/*" component={CatchAllPage} />
    {/*<Route path="/login" render={props => <Login {...props} />} />
    <Route path="/register" render={props => <Register {...props} />} />*/}
    <Redirect from="/" exact to="/home" />
    <Route path="**" render={props => <Error400 {...props} />} />
  </Switch>
)