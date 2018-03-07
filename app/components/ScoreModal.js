import React from 'react'
import './content.css'
import ScoreModalInner from './ScoreModalInner'

const ScoreModal = ({mostRecentAttempt, dispatch}) => {
	if (mostRecentAttempt.isPosting || mostRecentAttempt.hasPosted) {
		return(
			<div 
				className="score-modal"
			>
				<ScoreModalInner 
					wpm={mostRecentAttempt.wpm} 
					title={mostRecentAttempt.title} 
					isPosting={mostRecentAttempt.isPosting}
					dispatch={dispatch}
				/>
			</div>
		)
	}
	return(
		<div></div>
	)
}

export default ScoreModal