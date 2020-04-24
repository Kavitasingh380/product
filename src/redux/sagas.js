import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { getProductRequest,createProductRequest,deleteProductRequest,editProductRequest } from './product/action/';


export function* watchActions () {
  yield takeLatest(constants.GET_PRODUCT_REQUEST, getProductRequest);
  yield takeLatest(constants.CREATE_PRODUCT_REQUEST, createProductRequest);
  yield takeLatest(constants.DELETE_PRODUCT_REQUEST, deleteProductRequest);
  yield takeLatest(constants.EDIT_PRODUCT_REQUEST, editProductRequest);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
