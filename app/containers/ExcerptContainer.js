import { connect } from 'react-redux'
import ExcerptInput from '../components/main/ExcerptInput'

const mapStateToProps = state => {
	return {
		currentExcerpt: state.currentExcerpt
	}
}

const ExcerptContainer = connect(
	mapStateToProps
)(ExcerptInput)

export default ExcerptContainer