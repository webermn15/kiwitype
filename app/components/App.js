import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { setSelectedExcerpt, setAllScores, setFilteredExcerpts, fetchScores } from '../actions'
import Header from './header'
import Content from './Content'
import ScoreModalContainer from '../containers/ScoreModalContainer'

class App extends Component<{}> {
	componentWillMount = () => {
		request
			.get('https://kiwitype-api.herokuapp.com/excerpts/init')
			.end((err, data) => {
				if (err) {
					console.log(err)
				}
				else {
					const parsed = JSON.parse(data.text)
					const scores = {allScores: parsed.allscores, userScores: parsed.userscores}
					this.props.dispatch(setSelectedExcerpt(parsed.excerpt))
					this.props.dispatch(setAllScores(scores))
					this.props.dispatch(setFilteredExcerpts(parsed.filteredexcerpts))
				}
			})
	}
	render() {
		return(
			<div className="app">
				<Header />
				<Content />
				<ScoreModalContainer />
			</div>
		)
	}
}

export default connect()(App)