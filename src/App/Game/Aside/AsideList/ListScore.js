import React from 'react';
import PropTypes from 'prop-types';

const ListScore = ({username, wpm, id, creation_date}) => (
	<li style={{
		backgroundColor: id % 2 == 0 ? '#B1D84C' : null
	}}>
		<span style={{textDecoration: 'underline'}}>{username}</span> : {wpm} wpm - {creation_date}
	</li>
)

export default ListScore;

ListScore.propTypes = {
	username: PropTypes.string.isRequired,
	wpm: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	creation_date: PropTypes.string.isRequired
}