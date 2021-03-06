import React from 'react';
import PropTypes from 'prop-types';
import ExcerptDetail from './ExcerptDetail';
import '../main.css'

const Excerpt = ({currentExcerpt, bodyArray, currentIndex}) => (
	<div className="excerpt">
		<ExcerptDetail id={currentExcerpt.id} author={currentExcerpt.author} title={currentExcerpt.title} description={currentExcerpt.description}/>
		<div className="excerpt-body">
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

export default Excerpt;

Excerpt.propTypes = {
	currentExcerpt: PropTypes.object.isRequired,
	bodyArray: PropTypes.array.isRequired,
	currentIndex: PropTypes.number.isRequired
}