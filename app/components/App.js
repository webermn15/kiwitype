import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { setSelectedExcerpt } from '../actions'
import Header from './header'
import Content from './Content'

class App extends Component<{}> {
	componentWillMount = () => {
		request
			.get('http://localhost:9292/excerpts/random')
			.end((err, data) => {
				if (err) {
					console.log(err)
				}
				else {
					const parsed = JSON.parse(data.text)
					console.log(parsed)
					this.props.dispatch(setSelectedExcerpt(parsed))
				}
			})
	}
	render() {
		return(
			<div>
				<Header />
				<Content />
			</div>
		)
	}
}

export default connect()(App)