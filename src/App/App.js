import React, { Component } from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedExcerpt, setAllScores, setFilteredExcerpts, errorGettingScores, showAlert } from './actions';
import Header from './Header';
import Game from './Game';
import { ScoreModalContainer } from './ScoreModal';
import { AlertModalContainer } from './AlertModal';

class App extends Component<{}> {
	componentWillMount = () => {
		request
			.get('https://kiwitype-api.herokuapp.com/excerpts/init')
			.then(data => {
				const parsed = JSON.parse(data.text)
				const scores = {allScores: parsed.allscores, userScores: parsed.userscores}
				this.props.dispatch(setSelectedExcerpt(parsed.excerpt))
				this.props.dispatch(setAllScores(scores))
				this.props.dispatch(setFilteredExcerpts(parsed.filteredexcerpts))
			})
			.catch(err => {
				this.props.dispatch(errorGettingScores(err.message))
				this.props.dispatch(showAlert())
			})
	}
	render() {
		return(
			<div className="app">
				<Header />
				<Game />
				<ScoreModalContainer />
				<AlertModalContainer />
			</div>
		)
	}
}

export default connect()(App);

App.propTypes = {
	dispatch: PropTypes.func.isRequired
}