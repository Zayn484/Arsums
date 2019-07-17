import React from "react";
import "./Toolbar.css";

class Toolbar extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div
        id="myNav"
        className="overlay"
        style={this.props.open ? { width: "100%" } : { width: 0 }}
      >
        <span className="closebtn" onClick={this.props.close}>
          &times;
        </span>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    );
  }
}

export default Toolbar;
