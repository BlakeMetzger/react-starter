import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Resources from "./Resources";
//import Dashboard from './Dashboard';
//import SurveyNew from './surveys/SurveyNew';
import PostsIndex from "./posts/PostsIndex";
import PostsNew from "./posts/PostsNew";
import PostsShow from "./posts/PostsShow";
import "../style/style.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter className="app-container">
        <div>
          <Header className="nav-bottom" />
          <div className="nav-bottom" />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              path="/posts/new"
              component={() => {
                return PostsNew;
              }}
            />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/posts" component={PostsIndex} />
            <Route path="/resources" component={Resources} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
