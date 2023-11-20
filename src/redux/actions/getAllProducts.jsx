import axios from 'axios';
let url = import.meta.env.VITE_BASE_URL;

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ALLPRODUCTS_PENDING' });
    const result = await axios.get(`${url}/products`);
    dispatch({ payload: result.data, type: 'GET_ALLPRODUCTS_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.message, type: 'GET_ALLPRODUCTS_FAILED' });
    console.log('error get all products', error);
  }
};