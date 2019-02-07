import { Post, Get, Put } from "../utilities/axiosRequest";
import { GET_ORDER } from "../constants/actionTypes";

export const postOrderAction = async (details) => {
  try {
    const response = await Post('/orders', details);
    return response.status;
  } catch (error) {
    return error;
  }
};

export const getOrderCreator = orders => ({
  type: GET_ORDER,
  payload: orders,
});

export const getOrderAction = (userId) => async (dispatch) => {
  try {
    const response = await Get(`/users/${userId}/orders`);
    const orders = response.orders;
    if(orders[0]) {
      return dispatch(getOrderCreator(
        orders
      ));
    } return dispatch(getOrderCreator(
        []
      ));
  } catch (error) {
    return error;
  }
};

export const cancelOrderAction = async (id) => {
  try {
    const response = await Put(`/cancel/${id}`);
    if(response.status === 'success') {
      return id;
    } return false;
  } catch (error) {
    return error;
  }
};
