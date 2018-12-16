import React from 'react';
import PropTypes from 'prop-types';

const ListExcerpt = ({author, title, id, onClick}) => (
	<li style={{
		cursor: 'pointer',
		backgroundColor: id % 2 == 0 ? '#B1D84C' : null
	}}>
		<a 
			onClick={e => 
				{e.preventDefault()
				onClick()}
		}>
			{author}, {title}
		</a>
	</li>
)

export default ListExcerpt;

ListExcerpt.propTypes = {
	author: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}