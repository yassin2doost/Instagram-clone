import React, { Component, cloneElement } from "react";
import { Link } from "react-router";

class Main extends Component {
  render(props) {
    return (
      <div>
        <h1>
          <Link to="/">Istagram</Link>
        </h1>
        {cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
export default Main;
