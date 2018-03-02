import React from 'react'
import ExcerptContainer from '../../containers/ExcerptContainer'
import ExcerptInput from './ExcerptInput'
import KeyboardDisplay from './KeyboardDisplay'
import './main.css'

const Main = () => (
	<div className="main-container">
		<ExcerptContainer />
		<ExcerptInput />
		<KeyboardDisplay />
	</div>
)

export default Main