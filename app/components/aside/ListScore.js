import React from 'react'

const ListScore = ({username, wpm, id, creation_date}) => (
	<li style={{
		backgroundColor: id % 2 == 0 ? '#B1D84C' : null
	}}>
		<span style={{textDecoration: 'underline'}}>{username}</span> : {wpm} wpm - {creation_date}
	</li>
)

export default ListScore