import React from 'react';
import AsideFilter from './AsideFilter';
import AsideListContainer from './AsideList';
import './aside.css';

const Aside = () => (
	<aside className="aside-container">
		<AsideFilter />
		<AsideListContainer />
	</aside>
)

export default Aside;