import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import kiwiApp from './reducers'
 
let store = createStore(kiwiApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)