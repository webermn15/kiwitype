import React from 'react'
import ExcerptDetail from './ExcerptDetail'

const Excerpt = ({currentExcerpt, bodyArray, currentIndex}) => (
	<div>
		<ExcerptDetail id={currentExcerpt.id} author={currentExcerpt.author} title={currentExcerpt.title} description={currentExcerpt.description}/>
		<div>
	    {bodyArray.map((char, i) => (
	      <span 
	      	key={i}
	      	style={{
					  textDecoration: i === currentIndex ? 'underline' : 'none',
					  backgroundColor: i === currentIndex ? 'yellow' : null
					}}>
	      	{char}
	      </span>
	    ))}
		</div>
	</div>
)

export default Excerpt