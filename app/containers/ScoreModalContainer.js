import { connect } from 'react-redux'
import ScoreModal from '../components/ScoreModal'

const mapStateToProps = state => {
	return {
		mostRecentAttempt: state.mostRecentAttempt
	}
}

const ScoreModalContainer = connect(
	mapStateToProps
)(ScoreModal)

export default ScoreModalContainer