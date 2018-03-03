import { connect } from 'react-redux'
import { setSelectedExcerpt } from '../actions'
import AsideList from '../components/aside/AsideList'

const getAsideList = (state, filter) => {
  switch (filter) {
    case 'SHOW_ALL_SCORES':
      return state.allScores
    case 'SHOW_USER_SCORES':
      return state.userScores
    case 'SHOW_EXCERPTS':
    	return state.filteredExcerpts
    default:
      return state
  }
}

const mapStateToProps = state => {
	return {
		asideList: getAsideList(state, state.asideFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAsideClick: object => {
			dispatch(setSelectedExcerpt(object))
		}
	}
}

const AsideListContainer = connect(
	mapStateToProps
)(AsideList)

export default AsideListContainer