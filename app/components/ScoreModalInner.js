import React from 'react'

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

export default ScoreModalInner