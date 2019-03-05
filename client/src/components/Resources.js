import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import PostBoard from "./common/PostBoard";
import TapTarget from "./common/TapTarget";
import "../style/resources.css";

class Resources extends Component {
  state = { isHidden: false, rowSize: 6 };

  componentWillMount() {
    let visited = sessionStorage.getItem("alreadyVisitedResources");

    if (visited) {
      //Hide Tap Target if already visited page.
      this.setState({ isHidden: true });
    } else {
      //Show Tap Target on first page visit.
      sessionStorage.setItem("alreadyVisitedResources", true);
      this.setState({ isHidden: false });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateRowSize);
    var elems = document.querySelectorAll(".collapsible.expandable");
    var instance = M.Collapsible.init(elems, {
      accordion: true
    });
    if (window.innerWidth < 768 && this.state.rowSize !== 12) {
      this.setState({ rowSize: 12 });
    }
  }

  updateRowSize = () => {
    if (window.innerWidth < 768) {
      this.setState({ rowSize: 12 });
    } else {
      this.setState({ rowSize: 6 });
    }
  };

  render() {
    return (
      <div>
        <TapTarget isHidden={this.state.isHidden}>
          <h5>This is my resources page!</h5>
          <p>
            Here you will find easy access to all of my favorite resources for
            learning software development.
          </p>
        </TapTarget>
        <PostBoard className="post-board">
          <div className="row">
            <div className="post-board-content">
              <h4 className="content-header">Resources:</h4>
            </div>
            <div className={`col s${this.state.rowSize}`}>
              <ul className="collapsible expandable">
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-code" />
                    Javascript
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-code" />
                    React
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-code" />
                    Redux
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`col s${this.state.rowSize}`}>
              <ul className="collapsible expandable" style={{ color: "peru" }}>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-code" />
                    Styling
                  </div>
                  <div className="collapsible-body">
                    <ul className="collection">
                      <a href="https://materializecss.com/" target="_blank">
                        <li className="collection-item"> Materialize CSS </li>
                      </a>
                      <a href="https://getbootstrap.com/docs/" target="_blank">
                        <li className="collection-item"> Bootstrap </li>
                      </a>
                      <a
                        href="https://semantic-ui.com/introduction/getting-started.html"
                        target="_blank"
                      >
                        <li className="collection-item"> Semantic UI </li>
                      </a>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-database" />
                    Database
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="fa fa-free-code-camp" />
                    Education
                  </div>
                  <div className="collapsible-body" />
                </li>
              </ul>
            </div>
          </div>
        </PostBoard>
      </div>
    );
  }
}

export default Resources;
