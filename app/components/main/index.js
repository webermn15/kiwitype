import React from 'react'
import Excerpt from './Excerpt'
import ExcerptInput from './ExcerptInput'
import KeyboardDisplay from './KeyboardDisplay'
import './main.css'

const Main = () => (
	<div className="main-container">
		<Excerpt />
		<ExcerptInput />
		<KeyboardDisplay />
	</div>
)

export default Main