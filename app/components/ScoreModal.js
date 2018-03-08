import React from 'react'
import './content.css'
import ScoreModalInner from './ScoreModalInner'

const ScoreModal = ({mostRecentAttempt, closeAndPostResult}) => {
	if (mostRecentAttempt.isPosting || mostRecentAttempt.hasPosted) {
		return(
			<div 
				className="score-modal"
			>
				<ScoreModalInner 
					wpm={mostRecentAttempt.wpm} 
					title={mostRecentAttempt.title} 
					isPosting={mostRecentAttempt.isPosting}
					onClick={() => {closeAndPostResult(mostRecentAttempt.excerptId)}}
				/>
			</div>
		)
	}
	return(
		<div></div>
	)
}

export default ScoreModal