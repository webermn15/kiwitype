import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import kiwiApp from './reducers'
import { fetchScores } from './actions'
 
let store = createStore(kiwiApp, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.dispatch(fetchScores(1))

render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)