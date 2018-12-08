import { connect } from 'react-redux';
import ExcerptInput from './ExcerptInput';

const mapStateToProps = state => {
	return {
		currentExcerpt: state.currentExcerpt
	}
}

const ExcerptContainer = connect(
	mapStateToProps
)(ExcerptInput)

export default ExcerptContainer;