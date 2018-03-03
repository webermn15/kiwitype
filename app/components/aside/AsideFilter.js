import React from 'react'
import FilterLinkContainer from '../../containers/FilterLinkContainer'
import { AsideFilters } from '../../actions'

const AsideFilter = () => (
	<div>
		<FilterLinkContainer filter={AsideFilters.SHOW_EXCERPTS}>Excerpts</FilterLinkContainer> | 
		<FilterLinkContainer filter={AsideFilters.SHOW_ALL_SCORES}>High Scores</FilterLinkContainer> | 
		<FilterLinkContainer filter={AsideFilters.SHOW_USER_SCORES}>My Scores</FilterLinkContainer>
	</div>
)

export default AsideFilter