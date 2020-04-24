import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  getProduct: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
  },
  createProduct: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
  },
  deleteProduct: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
  },
  editProduct: {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
  }
};

const getProductRequest = (state, action) => update(state, {
  getProduct: {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: '' }
  }
});
const getProductSuccess = (state, action) => update(state, {
  getProduct: {
    data: { $set: action.payload },
    isLoggedIn: { $set: true },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: 'Get product success' }
  }
});
const getProductError = (state, action) => update(state, {
  getProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  }
});
const getProductClear = (state, action) => update(state, {
  getProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: '' }
  }
});


const createProductRequest = (state, action) => update(state, {
  createProduct: {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: '' }
  }
});
const createProductSuccess = (state, action) => update(state, {
  createProduct: {
    data: { $set: action.payload },
    isLoggedIn: { $set: true },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: 'Create product success' }
  }
});
const createProductError = (state, action) => update(state, {
  createProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  }
});
const createProductClear = (state, action) => update(state, {
  createProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: '' }
  }
});


const deleteProductRequest = (state, action) => update(state, {
  deleteProduct: {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: '' }
  }
});
const deleteProductSuccess = (state, action) => update(state, {
  deleteProduct: {
    data: { $set: action.payload },
    isLoggedIn: { $set: true },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: 'delete product success' }
  }
});
const deleteProductError = (state, action) => update(state, {
  deleteProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  }
});
const deleteProductClear = (state, action) => update(state, {
  deleteProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: '' }
  }
});


const editProductRequest = (state, action) => update(state, {
  editProduct: {
    isLoading: { $set: true },
    isError: { $set: false },
    isSuccess: { $set: false },
    message: { $set: '' }
  }
});
const editProductSuccess = (state, action) => update(state, {
  editProduct: {
    data: { $set: action.payload },
    isLoggedIn: { $set: true },
    isLoading: { $set: false },
    isError: { $set: false },
    isSuccess: { $set: true },
    message: { $set: 'edit product success' }
  }
});
const editProductError = (state, action) => update(state, {
editProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  }
});
const editProductClear = (state, action) => update(state, {
  editProduct: {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: '' }
  }
});



export default handleActions({
  [constants.GET_PRODUCT_REQUEST]: getProductRequest,
  [constants.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [constants.GET_PRODUCT_ERROR]: getProductError,
  [constants.GET_PRODUCT_CLEAR]: getProductClear,

  [constants.CREATE_PRODUCT_REQUEST]: createProductRequest,
  [constants.CREATE_PRODUCT_SUCCESS]: createProductSuccess,
  [constants.CREATE_PRODUCT_ERROR]: createProductError,
  [constants.CREATE_PRODUCT_CLEAR]: createProductClear,



  [constants.DELETE_PRODUCT_REQUEST]: deleteProductRequest,
  [constants.DELETE_PRODUCT_SUCCESS]: deleteProductSuccess,
  [constants.DELETE_PRODUCT_ERROR]: deleteProductError,
  [constants.DELETE_PRODUCT_CLEAR]: deleteProductClear,


  [constants.EDIT_PRODUCT_REQUEST]: editProductRequest,
  [constants.EDIT_PRODUCT_SUCCESS]: editProductSuccess,
  [constants.EDIT_PRODUCT_ERROR]: editProductError,
  [constants.EDIT_PRODUCT_CLEAR]: editProductClear,

  
  
  

}, initialState);
