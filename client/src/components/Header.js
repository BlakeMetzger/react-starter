import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import Payments from "./Payments";
import SideNav from "./SideNav";
import "../style/style.css";

class Header extends Component {
  // renderAuthContent() {
  // 	switch (this.props.auth) {
  // 		case null:
  // 			return;
  // 		case false:
  // 			return (
  // 				<li>
  // 					<a href="/auth/google">Login With Google</a>
  // 				</li>
  // 			);
  // 		default:
  // 			return [
  // 				<li key="4">
  // 					<Payments />
  // 				</li>,
  // 				<li key="5" style={{ margin: '0 10px' }}>
  // 					Credits: {this.props.auth.credits}
  // 				</li>,
  // 				<li key="6">
  // 					<a href="/api/logout">Logout</a>
  // 				</li>
  // 			];
  // 	}
  // }

  renderContent() {
    return [
      <li key="1">
        <Link to="/">About</Link>
      </li>,
      <li key="2">
        <Link to="/posts">Blog</Link>
      </li>,
      <li key="3">
        <Link to="/resources">Resources</Link>
      </li>
    ];
  }

  renderSideNav() {
    return <SideNav />;
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <nav>
            <div className="nav-wrapper">
              <ul className="right">{this.renderContent()}</ul>
              <ul className="left">{this.renderSideNav()}</ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
