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

export const getJewelery = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_JEWELERY_PENDING' });
    const result = await axios.get(`${url}/products/category/jewelery`);
    dispatch({ payload: result.data, type: 'GET_JEWELERY_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.message, type: 'GET_JEWELERY_FAILED' });
    console.log('error get jewelery', error);
  }
};

export const getElectronics = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ELECTRONICS_PENDING' });
    const result = await axios.get(`${url}/products/category/electronics`);
    dispatch({ payload: result.data, type: 'GET_ELECTRONICS_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.message, type: 'GET_ELECTRONICS_FAILED' });
    console.log('error get electronics', error);
  }
};

export const getMenProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_MENPRODUCTS_PENDING' });
    const result = await axios.get(`${url}/products/category/men's%20clothing`);
    dispatch({ payload: result.data, type: 'GET_MENPRODUCTS_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.message, type: 'GET_MENPRODUCTS_FAILED' });
    console.log('error get men products', error);
  }
};

export const getWomenProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_WOMENPRODUCTS_PENDING' });
    const result = await axios.get(`${url}/products/category/women's%20clothing`);
    dispatch({ payload: result.data, type: 'GET_WOMENPRODUCTS_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.message, type: 'GET_WOMENPRODUCTS_FAILED' });
    console.log('error get women products', error);
  }
};