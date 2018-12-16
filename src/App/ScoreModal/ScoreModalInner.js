import React from 'react';
import PropTypes from 'prop-types';

const ScoreModalInner = ({wpm, title, isPosting, onClick}) => {
	if (isPosting) {
		return(
			<div>
				Loading...
			</div>
		)
	}
	return(
		<div>
			You scored {wpm} WPM on {title}!<br/>
			<span 
				style={{fontSize: '14px', marginTop: '20px', cursor: 'pointer'}}
				onClick={() => {
					onClick()
				}}
			>
				click here to close
			</span>
		</div>
	)
}

export default ScoreModalInner;

ScoreModalInner.propTypes = {
	wpm: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	isPosting: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}