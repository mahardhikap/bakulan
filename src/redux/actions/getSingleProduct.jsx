import axios from 'axios';
let url = import.meta.env.VITE_BASE_URL;

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_DETAILPRODUCT_PENDING' });
    const result = await axios.get(`${url}/products/${id}`);
    dispatch({ payload: result.data, type: 'GET_DETAILPRODUCT_SUCCESS' });
  } catch (error) {
    dispatch({ payload: error.message, type: 'GGET_DETAILPRODUCT_FAILED' });
    console.log('error get detail product', error);
  }
};
