import React, { Component } from "react";
import List from "./List";
import Order from "./Order";

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <List />
        </div>
        <div className="col-md-6">
          <Order />
        </div>
      </div>
    );
  }
}

export default Home;
