import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Logo from "../../assets/Logo.png";

class TapTarget extends Component {
  state = { isHidden: this.props.isHidden };

  componentDidMount() {
    if (!this.state.isHidden) {
      var elems = document.querySelectorAll(".tap-target");
      M.TapTarget.init(elems, { onClose: this.hideTapTarget });
      var elem = document.querySelector(".tap-target");
      var instance = M.TapTarget.getInstance(elem);
      this.showTapTarget(instance);
    }
  }

  showTapTarget(instance) {
    instance.open();
  }

  hideTapTarget = () => {
    setTimeout(() => {
      this.setState({ isHidden: true });
    }, 200);
  };

  render() {
    const { container, image, target } = style;
    const setMargin = () => {
      return this.state.isHidden ? 0 : -62;
    };
    const showClose = () => {
      return this.state.isHidden ? "hide" : "";
    };

    return (
      <div style={(container, { marginTop: setMargin() })}>
        <a
          id="menu"
          className={`transparent ${showClose()}`}
          onClick={this.hideTapTarget}
          style={{ width: 55, height: "auto", paddingLeft: 7 }}
        >
          <img
            className="nav-logo waves-effect circle"
            src={Logo}
            alt=""
            style={image}
          />
        </a>
        <div
          className="tap-target"
          data-target="menu"
          data-activates="menu"
          style={target}
        >
          <div className="tap-target-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    backgroundColor: "transparent",
    marginLeft: 3
  },
  image: {
    height: 60,
    width: 60,
    padding: 3,
    backgroundColor: "transparent"
  },
  target: {
    backgroundColor: "peru"
  }
};

export default TapTarget;
