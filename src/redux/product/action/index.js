import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* getProductRequest (action) {
  try {
    const response = yield call(fireAjax, 'GET', `${CONFIG.BASE_URL}`, {
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.getProductSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.getProductError('Invalid Blog...'));
    }
  } catch (e) {
    yield put(actions.getProductError('Error Occurs !!'));
    console.warn('Some error found in "getProductquest" action\n', e);
  }
}

export function* createProductRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}`, {
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.createProductSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.createProductError('Invalid Blog...'));
    }
  } catch (e) {
    yield put(actions.createProductError('Error Occurs !!'));
    console.warn('Some error found in "createProductquest" action\n', e);
  }
}

export function* editProductRequest (action) {
  try {
    const response = yield call(fireAjax, 'PUT', `${CONFIG.BASE_URL}`, {
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.editProductSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.editProductError('Invalid Blog...'));
    }
  } catch (e) {
    yield put(actions.editProductError('Error Occurs !!'));
    console.warn('Some error found in "editProductquest" action\n', e);
  }
}

export function* deleteProductRequest (action) {
  try {
    let id = action.payload.id
    const response = yield call(fireAjax, 'DELETE', `${CONFIG.BASE_URL}${id}`, {
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.deleteProductSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.deleteProductError('Invalid Blog...'));
    }
  } catch (e) {
    yield put(actions.deleteProductError('Error Occurs !!'));
    console.warn('Some error found in "deleteProductquest" action\n', e);
  }
}
