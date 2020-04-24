import {createAction} from 'redux-actions';
import * as constants from './constants';

export const getProductRequest = createAction(constants.GET_PRODUCT_REQUEST);
export const getProductSuccess = createAction(constants.GET_PRODUCT_SUCCESS);
export const getProductError = createAction(constants.GET_PRODUCT_ERROR);
export const getProductClear= createAction(constants.GET_PRODUCT_CLEAR);


export const createProductRequest = createAction(constants.CREATE_PRODUCT_REQUEST);
export const createProductSuccess = createAction(constants.CREATE_PRODUCT_SUCCESS);
export const createProductError = createAction(constants.CREATE_PRODUCT_ERROR);
export const createProductClear = createAction(constants.CREATE_PRODUCT_CLEAR);


export const deleteProductRequest = createAction(constants.DELETE_PRODUCT_REQUEST);
export const deleteProductSuccess = createAction(constants.DELETE_PRODUCT_SUCCESS);
export const deleteProductError = createAction(constants.DELETE_PRODUCT_ERROR);
export const deleteProductClear = createAction(constants.DELETE_PRODUCT_CLEAR);


export const editProductRequest = createAction(constants.EDIT_PRODUCT_REQUEST);
export const editProductSuccess = createAction(constants.EDIT_PRODUCT_SUCCESS);
export const editProductError = createAction(constants.EDIT_PRODUCT_ERROR);
export const editProductClear = createAction(constants.EDIT_PRODUCT_CLEAR);
