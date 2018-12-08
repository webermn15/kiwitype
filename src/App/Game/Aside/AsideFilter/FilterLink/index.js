import { connect } from 'react-redux';
import { setAsideFilter } from './actions';
import Link from './Link';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.asideFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onFilterClick: () => {
			dispatch(setAsideFilter(ownProps.filter))
		}
	}
}


const FilterLinkContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLinkContainer;