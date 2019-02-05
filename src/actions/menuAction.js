import { Post, Get } from "../utilities/axiosRequest";
import { GET_RESTAURANTS, GET_MENU } from "../constants/actionTypes";

export const restaurantCreator = restaurants => ({
  type: GET_RESTAURANTS,
  payload: restaurants,
});

export const menuListCreator = menu => ({
  type: GET_MENU,
  payload: menu,
});

export const restaurantAction = () => async (dispatch) => {
  try {
    const response = await Get('/admin');
    const restaurants = response.restaurant;
    if(restaurants[0]) {
      return dispatch(restaurantCreator(
        restaurants
      ));
    }
  } catch (error) {
    return error;
  }
};

export const menuListingAction = (value) => async (dispatch) => {
  try {
    const response = await Get(`/menu?id=${value}`);
    const menuList = response.menus;
    if(menuList[0]) {
      return dispatch(menuListCreator(
        menuList
      ));
    } return dispatch(menuListCreator(
      []
    ));
  } catch (error) {
    return error;
  }
};
