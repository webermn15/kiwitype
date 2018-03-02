import React, { Component } from 'react'
import request from 'superagent'
import ExcerptDetail from './ExcerptDetail'

export default class Excerpt extends Component<{}> {
	constructor(props) {
		super(props)

		this.state = {
			id: 0,
			author: '',
			title: '',
			description: '',
			body: ''
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
					
				}
			})
	}
	render() {
		console.log(this.props)
		return(
			<div>
				<ExcerptDetail author={this.state.author} title={this.state.title} description={this.state.description}/>
				<div>
					{this.state.body}
				</div>
			</div>
		)
	}
}