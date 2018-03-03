import React from 'react'

const ListScore = ({username, wpm, creation_date}) => (
	<li>
		{username} : {wpm} on {creation_date}
	</li>
)

export default ListScore