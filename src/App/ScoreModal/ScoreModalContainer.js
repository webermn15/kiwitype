import { connect } from 'react-redux';
import ScoreModal from './ScoreModal';
import { closeResult, fetchScores } from './actions';

const mapStateToProps = state => {
	return {
		mostRecentAttempt: state.mostRecentAttempt
	}
}

const mapDispatchToProps = dispatch => {
	return {
		closeAndPostResult: (id) => {
			dispatch(closeResult())
			dispatch(fetchScores(id))
		}
	}
}

const ScoreModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ScoreModal)

export default ScoreModalContainer;