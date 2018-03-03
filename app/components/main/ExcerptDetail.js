import React from 'react'
import './main.css'

const ExcerptDetail = ({id, author, title, description}) => (
	<div id={id} className="excerpt-detail">
		<div>{ title } - { author }:</div><div>{ description }</div>
	</div>
)

export default ExcerptDetail