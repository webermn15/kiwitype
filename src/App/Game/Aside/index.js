import React from 'react';
import AsideFilter from './AsideFilter';
import AsideListContainer from './AsideListContainer';
import './aside.css';

const Aside = () => (
	<aside className="aside-container">
		<AsideFilter />
		<AsideListContainer />
	</aside>
)

export default Aside;