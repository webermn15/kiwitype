import React from 'react'
import ExcerptDetail from './ExcerptDetail'

const Excerpt = ({currentExcerpt, dispatch}) => (
	<div>
		<ExcerptDetail id={currentExcerpt.id} author={currentExcerpt.author} title={currentExcerpt.title} description={currentExcerpt.description}/>
		<div>{currentExcerpt.body}
		</div>
	</div>
)

export default Excerpt