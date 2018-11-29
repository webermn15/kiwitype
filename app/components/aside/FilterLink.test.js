import React from 'react';
import FilterLink from './FilterLink';
import renderer from 'react-test-renderer';

test('Component should be clickable if active parameter is truthy', () => {
	const component = renderer.create(
		<FilterLink active='true' onFilterClick={() => {console.log('did it work')}}>A child to render</FilterLink>
	);
	
})