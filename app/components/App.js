import React, { Component } from 'react'
import request from 'superagent'
import Header from './header'
import Content from './Content'

export default class App extends Component<{}> {
	constructor() {
		super()

		this.state = {

		}
	}
	componentDidMount = () => {
		request
			.get('http://localhost:9292/excerpts/random')
			.end((err, data) => {
				if (err) {
					console.log(err)
				}
				else {
					const parsed = JSON.parse(data.text)
					parsed.active = true
					console.log(parsed)
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