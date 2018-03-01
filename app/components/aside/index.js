import React from 'react'
import AsideFilter from './AsideFilter'
import AsideList from './AsideList'
import './aside.css'

const Aside = () => (
	<aside className="aside-container">
		<AsideFilter />
		<AsideList />
	</aside>
)

export default Aside 