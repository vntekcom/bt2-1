import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, subItem } from "../store/actions/item";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
  }

  render() {
    let { name, price, image } = this.props.item;

    return (
      <tr>
        <td style={{ width: "20%" }}>
          <img src={image} alt="bap" width="150px" height="150px" />
        </td>
        <td style={{ width: "60%" }}>
          <p style={{ color: "#99FF00" }}> {name} </p>
          <p> {price} </p>
        </td>

        <td style={{ width: "20%" }}>
          <div className="btn-group">
            <button
              className="btn btn-info border-right"
              onClick={() => {
                if(this.state.qty > 0){
                  this.props.subItem(this.props.item);
                  this.setState({
                    qty: this.state.qty - 1
                  });
                }
              }}
            >
              -
            </button>

            <label style={{width:'50px',textAlign:'center'}}>{this.state.qty}</label>
            
            <button
              className="btn btn-info border-left"
              onClick={() => {
                this.props.addItem(this.props.item);
                this.setState({
                  qty: this.state.qty + 1
                });
              }}
            >
              +
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    Order: state.orderArr
  };
};
//Add data to Store
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItem(item));
    },
    subItem: item => {
      dispatch(subItem(item));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItem);
