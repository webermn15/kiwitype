import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onFilterClick}) => {
	if (active) {
		return <span>{children}</span>
	}
	
	return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onFilterClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link;

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onFilterClick: PropTypes.func.isRequired
}