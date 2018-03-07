import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import kiwiApp from './reducers'
import { getUserInfoFromToken } from './actions'

const middleware = applyMiddleware(thunk)
 
let store = createStore(
	kiwiApp, 
	compose(
		middleware,
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

const user = localStorage.getItem('kiwiTypeUser');
console.log(user)
if (user) {
  store.dispatch(getUserInfoFromToken(user));
}

render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)