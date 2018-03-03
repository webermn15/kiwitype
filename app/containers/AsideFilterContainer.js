import { connect } from 'react-redux'
import { setAsideFilter } from '../actions'
import AsideFilter from '../components/aside/AsideFilter'

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps)
	return {
		active: ownProps.filter === state.asideFilter
	}
}




const AsideFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AsideFilter)

export default AsideFilterContainer