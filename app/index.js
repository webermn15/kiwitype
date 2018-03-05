import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import kiwiApp from './reducers'

const middleware = applyMiddleware(thunk)
 
let store = createStore(
	kiwiApp, 
	compose(
		middleware,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)