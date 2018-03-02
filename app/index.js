import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import kiwiApp from './reducers'
 
let store = createStore(kiwiApp)

render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)