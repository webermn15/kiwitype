import React from 'react'
import '../main.css';

const ExcerptDetail = ({id, author, title, description}) => (
	<div id={id} className="excerpt-detail">
		<div className="excerpt-detail-title-author">
			<div className="detail-title">
				{ title }
			</div>
			<div className="detail-author">
				{ author }
			</div>
		</div>
		<div>{ description }</div>
	</div>
)

export default ExcerptDetail;