import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from "../presentational/Footer";
import HeaderAuth from "./HeaderAuth";
import { getOrderAction, cancelOrderAction } from "../../actions";


class ViewOrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      disabled: false,
    };
  }

  handleClick = async (id) => {
    this.setState({
      disabled: true,
    });
    const response = (await cancelOrderAction(id));
    if(response) {
      window.location.reload();
      this.setState({
        disabled: false,
      });
    }
  }

  async shouldComponentUpdate(nextProps) {
    const { user, getOrderAction } = this.props;
    if (user != nextProps.user && nextProps.user != {}) {
      this.setState({
        orders: (await getOrderAction(nextProps.user.userId)).payload,
      });
      return true;
    }
    return true;
  }

  render() {
    const { orders } = this.state;
    const { user: { fullName } } = this.props;
    let orderRows = [
      <tr>
        <td className="preload">
          Order History...
        </td>
      </tr>
    ];
    if(orders && orders[0]) {
      orderRows = orders.map((item) => (
        <tr>
          <td>{item.restaurantname}</td>
          <td>{item.foodname}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.price * item.quantity}</td>
          <td className="text-center">
            {
              item.orderstatus === 'New'
              ? (
                <button
                  className="fix"
                  id={item.id}
                  title="click to cancel order"
                  onClick={() => this.handleClick(item.id)}
                  disabled={this.state.disabled}
                >
                  {item.orderstatus}
                </button>
              )
              : item.orderstatus
            }
          </td>
        </tr>
      ));
      orderRows.unshift(
        <tr>
          <th>Restaurant</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th className="text-center">Status</th>
        </tr>
      );
    }
    return (
      <div>
        <HeaderAuth
          role="user"
          pageTitle="My Orders"
        />
        <div id="pageBody" className="container">
          <div className="mb-100"></div>
          <div className="spread-in mt-20">
            <div></div>
            <div className="top-text">
              <span className="text-theme">User: </span> 
							<strong>{fullName}</strong>
            </div>
          </div>
          <div className="table-responsive">
            <table className="mt-20" id="tableId">
              <tbody>
                {orderRows}
              </tbody>
						</table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ViewOrderPage.propTypes = {
  getOrderAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getOrderAction,
};

const mapStateToProps = state => ({
  user: state.currentUser.details,
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrderPage);
