import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Logo from "../assets/Logo.png";
import SocialMediaIcons from "./common/SocialMediaIcons";
import "../style/style.css";

export default class SideNav extends Component {
  state = { logoSize: 65 };

  componentDidMount() {
    var elem = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 300
    });
  }

  render() {
    if (window.innerWidth < 768 && this.state.logoSize !== 60) {
      this.setState({ logoSize: 60 });
    }

    return (
      <div
        onMouseEnter={() => {
          if (this.state.logoSize !== 75) {
            this.setState({ logoSize: 75 });
          }
        }}
        onMouseLeave={() => {
          if (this.state.logoSize === 75) {
            this.setState({ logoSize: 65 });
          }
        }}
      >
        <button
          data-target="slide-out"
          className="sidenav-trigger"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            margin: "auto",
            width: this.state.logoSize
          }}
        >
          <img className="nav-logo circle" src={Logo} alt="" />
        </button>
        <div style={{ marginTop: "4px" }}>
          <ul
            id="slide-out"
            className="sidenav"
            style={{ textAlign: "center" }}
          >
            <div className="sidenav-close" style={{ marginTop: "20%" }}>
              <Link to="/">
                <img
                  className="nav-logo circle"
                  src={Logo}
                  alt=""
                  style={{ width: "80%" }}
                />
                <div>About</div>
              </Link>
            </div>
            <li>
              <Link
                to="/resources"
                className="sidenav-close"
                style={{ color: "white" }}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className="sidenav-close"
                style={{ color: "white" }}
              >
                Blog
              </Link>
            </li>
            <li style={{ paddingTop: 20 }}>
              <SocialMediaIcons />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
