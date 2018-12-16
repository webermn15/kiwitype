import React from 'react';
import PropTypes from 'prop-types';
import ListScore from './ListScore';
import ListExcerpt from './ListExcerpt';
import '../aside.css';

const AsideList = ({asideList, asideFilter, onExcerptClick}) => {
	if (asideList.length == 0) {
		return(
			<div style={{
				backgroundColor: '#B1D84C',
				padding: '5px',
				marginTop: '15px',
				fontSize: '18px',
				fontFamily: 'Source Sans Pro',
				borderBottom: '1px solid white'
			}}>No records found!</div>
		)
	}
	return(
		<ul className="aside-list">
			{asideFilter 
			? 
			asideList.map((item, i) => (
				<ListExcerpt key={i} id={i} {...item} onClick={() => onExcerptClick(item)} />
			))
			: 
			asideList.map((item, i) => (
				<ListScore key={i} id={i} {...item} />
			))}
		</ul>
	)
}

export default AsideList;

AsideList.propTypes = {
	asideList: PropTypes.array,
	asideFilter: PropTypes.bool.isRequired,
	onExcerptClick: PropTypes.func.isRequired
}