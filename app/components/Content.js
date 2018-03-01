import React from 'react'
import Main from './main'
import Aside from './aside'
import './content.css'

const Content = () => (
	<main className="content-container">
		<Main />
		<Aside />
	</main>
)

export default Content