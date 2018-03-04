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

const getAsideFilter = (state) => {
  return state.asideFilter == 'SHOW_EXCERPTS' ? true : false
}


const mapStateToProps = (state) => {
	return {
		asideList: getAsideList(state, state.asideFilter),
    asideFilter: getAsideFilter(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onExcerptClick: object => {
			dispatch(setSelectedExcerpt(object))
		}
	}
}

const AsideListContainer = connect(
	mapStateToProps,
  mapDispatchToProps
)(AsideList)

export default AsideListContainer