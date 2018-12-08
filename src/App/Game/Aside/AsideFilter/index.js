import React from 'react';
import FilterLinkContainer from './FilterLink';

export const AsideFilters = {
	SHOW_EXCERPTS: 'SHOW_EXCERPTS',
	SHOW_ALL_SCORES: 'SHOW_ALL_SCORES',
	SHOW_USER_SCORES: 'SHOW_USER_SCORES'
}

const AsideFilter = () => (
	<div className="aside-filter">
		<FilterLinkContainer filter={AsideFilters.SHOW_EXCERPTS}>Excerpts</FilterLinkContainer> <span> | </span>
		<FilterLinkContainer filter={AsideFilters.SHOW_ALL_SCORES}>High Scores</FilterLinkContainer> <span> | </span>
		<FilterLinkContainer filter={AsideFilters.SHOW_USER_SCORES}>My Scores</FilterLinkContainer>
	</div>
)

export default AsideFilter;