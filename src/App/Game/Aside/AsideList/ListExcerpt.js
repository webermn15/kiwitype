import React from 'react';

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