import { Post, Get } from "../utilities/axiosRequest";

export const postOrderAction = async (details) => {
  try {
    return response = await Post('/orders', details);
  } catch (error) {
    return error;
  }
};
