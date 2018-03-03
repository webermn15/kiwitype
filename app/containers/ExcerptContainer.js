import { connect } from 'react-redux'
import { setSelectedExcerpt } from '../actions'
import Excerpt from '../components/main/Excerpt'

const mapStateToProps = state => {
	return {
		currentExcerpt: state.currentExcerpt
	}
}

const ExcerptContainer = connect(
	mapStateToProps
)(Excerpt)

export default ExcerptContainer