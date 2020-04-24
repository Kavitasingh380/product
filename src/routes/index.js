import React from 'react'
import { createHashHistory } from 'history';
import { HashRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import GetProduct from '../modules/getProduct';
import CreateProduct from '../modules/createProduct';
import EditProduct from '../modules/editProduct';


import createStore from '../store/createStore'

class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  shouldComponentUpdate () {
    return false
  }  
  render () {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter >
          <div>
            <Route exact path="/" component={GetProduct} />
            <Route exact path="/createProduct" component={CreateProduct} />
            <Route exact path="/editProduct" component={EditProduct} />
        
          </div>
        </HashRouter >
      </Provider>
    )
  }
}

export default App
