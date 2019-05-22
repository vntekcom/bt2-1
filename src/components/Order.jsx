import React, { Component } from "react";
import { connect } from "react-redux";

class Order extends Component {
  renderListItem = () => {
    return this.props.Order.map((item, i) => {
      if (item.qty > 0) {
        return (
          <p key={i}>
            <i class="fa fa-star" aria-hidden="true" />
            {item.newItem.name}. Số lượng: {item.qty}
          </p>
        );
      }
    });
  };

  renderQty = () => {
    let sumTotal = 0;
    this.props.Order.map((item, i) => {
      sumTotal += item.newItem.price * item.qty;
    });
    return sumTotal;
  };

  render() {
    return (
      <div>
        <h1>Combo Bắp Nước</h1>
        {this.renderListItem()}
        <hr />
        <h1>Tổng tiền:</h1>
        {this.renderQty()}
      </div>
    );
  }
}

// Load data form Store
const mapStateToProps = state => {
  return {
    Order: state.orderArr
  };
};
export default connect(
  mapStateToProps,
  null
)(Order);
