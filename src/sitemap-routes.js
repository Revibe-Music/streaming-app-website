import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

export default (
  <Switch>
    <Route path="/home" />
    <Route path="/blog" exact />
    <Route path="/blog/:id" />
    <Route path="/about" />
    <Route path="/contact" />
    <Route path="/instagram" />
    <Route path="/relink/:id" />
    <Route path="/404" />} />
    {/*<Route path="/login" render={props => <Login {...props} />} />
    <Route path="/register" render={props => <Register {...props} />} />*/}
  </Switch>
)