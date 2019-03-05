import React from "react";
import { Link } from "react-router-dom";
import PostBoard from "./common/PostBoard";

const Landing = () => {
  return (
    <PostBoard style={{ width: "70%" }}>
      <div
        style={{ paddingLeft: "3%", paddingRight: "3%", paddingBottom: "1%" }}
      >
        <div style={{ margin: 0 }}>
          <h4 style={{ color: "#2b2b2b" }}>Welcome to React Starter!</h4>
          <p style={{ color: "#2b2b2b" }}>
            Visit the
            <Link to="/resources" target="_blank" style={{ color: "peru" }}>
              {" "}
              resources{" "}
            </Link>
            page for a list of resources to get started building your
            application. See the source code on
            <a
              href="https://github.com/BlakeMetzger/react-starter"
              target="_blank"
              style={{ color: "peru" }}
            >
              {" "}
              GitHub.
            </a>
          </p>
        </div>
      </div>
    </PostBoard>
  );
};

export default Landing;
