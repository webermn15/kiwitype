import React, { Component } from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedExcerpt, setAllScores, setFilteredExcerpts } from './actions';
import Header from './Header';
import Game from './Game';
import { ScoreModalContainer } from './ScoreModal';

class App extends Component<{}> {
	componentWillMount = () => {
		request
			.get('https://kiwitype-api.herokuapp.com/excerpts/init')
			.end((err, data) => {
				if (err) {
					console.log(err) //YIKES
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
				<Game />
				<ScoreModalContainer />
			</div>
		)
	}
}

export default connect()(App);

App.propTypes = {
	dispatch: PropTypes.func.isRequired
}