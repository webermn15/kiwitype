import React, { Component } from 'react';
import Header from './Header';
import Main from './main'

export default class App extends Component<{}> {
	render() {
		return(
			<div>
				<Header />
				<Main />
			</div>
		)
	}
}