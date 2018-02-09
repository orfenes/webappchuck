import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import multi from 'redux-multi'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()   
const store =  applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)
ReactDOM.render(  
  <Provider store={store}>
    <App />   
  </Provider>
, document.getElementById('app'))