import React from 'react'
import ExcerptContainer from '../../containers/ExcerptContainer'
import KeyboardDisplay from './KeyboardDisplay'
import './main.css'

const Main = () => (
	<div className="main-container">
		<ExcerptContainer />
		<KeyboardDisplay />
	</div>
)

export default Main