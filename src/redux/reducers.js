import {combineReducers} from 'redux';

import product from './product/reducer/index';


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    product: product,
  
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
