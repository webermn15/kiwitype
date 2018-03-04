import React from 'react'

const ListExcerpt = ({author, title, onClick}) => (
	<li style={{cursor: 'pointer'}}>
		<a 
			onClick={e => 
				{e.preventDefault()
				onClick()}
		}>
			{author}, {title}
		</a>
	</li>
)

export default ListExcerpt