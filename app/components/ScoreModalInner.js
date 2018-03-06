import React from 'react'
import { closeResult } from '../actions'

const ScoreModalInner = ({wpm, title, isPosting, dispatch}) => {
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
					dispatch(closeResult())
				}}
			>
				click here to close
			</span>
		</div>
	)
}

export default ScoreModalInner