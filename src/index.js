import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { App } from './App';
import kiwiApp from './reducers';
import { getUserInfoFromToken } from './actions';

// const middleware = applyMiddleware(thunk)

// let store = createStore(
// 	kiwiApp, 
// 	compose(
// 		middleware,
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(kiwiApp,
		composeEnhancers(
			applyMiddleware(thunk),
		)
);

const user = localStorage.getItem('kiwiTypeUser')

if (user) {
	store.dispatch(getUserInfoFromToken(user))
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);