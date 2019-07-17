import React from "react";
import "./Orbit.css";

class Orbit extends React.Component {
  state = {
    x: 0,
    y: 0
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="view" onClick={this.props.onClick}>
        <div className="plane main">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>
    );
  }
}

export default Orbit;
