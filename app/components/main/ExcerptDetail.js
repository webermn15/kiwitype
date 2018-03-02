import React from 'react'
import './main.css'

const ExcerptDetail = ({author, title, description}) => (
	<div className="excerpt-detail">
		<div>{ title } - { author }:</div><div>{ description }</div>
	</div>
)

export default ExcerptDetail