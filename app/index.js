import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import kiwiApp from './reducers'
import { fetchScores } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
let store = createStore(
	kiwiApp, 
	composeEnhancers(
		applyMiddleware(thunk)
	)
)

store.dispatch(fetchScores(1))

render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)