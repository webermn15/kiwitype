import { connect } from 'react-redux'
import { setAsideFilter } from '../actions'
import FilterLink from '../components/aside/FilterLink'

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
)(FilterLink)

export default FilterLinkContainer