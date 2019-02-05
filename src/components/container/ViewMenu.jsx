import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from "../presentational/Footer";
import HeaderAuth from "../container/HeaderAuth";
import {
  restaurantAction,
  menuListingAction,
  postOrderAction,
} from "../../actions";


class ViewMenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      currentMenu: {},
      tableEmpty: true,
      inputObj: {},
    };
  }

  async componentWillMount() {
    this.setState({
      restaurants: (await this.props.restaurantAction()).payload,
    });
    await this.handleSelectRestaurant(event);
  }

  async handleSelectRestaurant(event) {
    this.setState({
      tableEmpty: false,
      currentMenu: (await this.props
        .menuListingAction(event.target.value)).payload,
      inputObj: {}
    });
  }

  handleChange = (event) => {
    this.setState({
      inputObj: {
        ...this.state.inputObj,
        [event.target.id]: event.target.value
      }
    });
  }

  handleClick = async (id) => {
    const response = await postOrderAction({
      quantity: this.state.inputObj[`quantity_${id}`],
			foodId: id,
    });
    if(response) {
      this.props.history.push('/view-order');
    }
  }

  render() {
    const {
      restaurants,
      currentMenu,
      tableEmpty,
    } = this.state;
    const { userName } = this.props;
    let menuRows = (<tr><td className="preload">
                      Select a restaurant to view food menu
                    </td></tr>);
    const restaurantOptions = restaurants.map(
      (item) => <option value={item.id}>{item.restaurantname}</option>);
    if(currentMenu && currentMenu[0]) {
      menuRows = currentMenu.map((item) => (
        <tr>
          <td><img src={item.imageurl} /></td>
          <td>{item.foodname}</td>
          <td>{item.price}</td>
          <td>
            <input
              id={`quantity_${item.id}`}
              type="number"
              onChange={(event) => this.handleChange(event)}
            />
          </td>
          <td>
            <button
              id={`food_${item.id}`}
              title="click to order"
              onClick={() => this.handleClick(item.id)}
            >
              Order
            </button>
          </td>
        </tr>
      ));
      menuRows.unshift(
        <tr>
          <th>Food Item</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Order</th>
        </tr>
      );
    } else if(!tableEmpty) {
      menuRows = <tr><td className="preload">No food found in the restaurant.</td></tr>
    }
    return (
      <div>
        <HeaderAuth
          role="user"
          pageTitle="Restaurants"
        />
        <div id="pageBody" className="container">
          <div className="mb-100"></div>
          <div className="spread-in mt-20">
            <select id="getList" onChange={(event) => {this.handleSelectRestaurant(event)}}>
              <option value="" defaultValue>Select Restaurant</option>
              {(restaurantOptions) ? restaurantOptions : ''}
            </select>
            <div className="top-text">
              <span className="text-theme">User: </span> 
							<strong>{userName}</strong>
            </div>
          </div>
          <div className="table-responsive">
            <table className="mt-20" id="tableId">
              <tbody>
                {menuRows}
              </tbody>
						</table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ViewMenuPage.propTypes = {
  restaurantAction: PropTypes.func.isRequired,
  menuListingAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  restaurantAction,
  menuListingAction,
};

const mapStateToProps = state => ({
  userName: state.currentUser.details.fullName,
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMenuPage);
