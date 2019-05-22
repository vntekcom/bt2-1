import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class List extends Component {
  renderListItem = cat => {
    return this.props.List.map((item, i) => {
      if (item.cat === cat) {
        return <ListItem item={item} key={i} />;
      }
    });
  };

  render() {
    return (
      <table className="table">
        <tbody>
          <tr className="bg">Bắp rang</tr>
          {this.renderListItem(1)}

          <tr className="bg">Combo</tr>
          {this.renderListItem(2)}

          <tr className="bg">Nước ngọt</tr>
          {this.renderListItem(3)}
        </tbody>
      </table>
    );
  }
}

// Load data form Store
const mapStateToProps = state => {
  return {
    List: state.listArr
  };
};
export default connect(
  mapStateToProps,
  null
)(List);
