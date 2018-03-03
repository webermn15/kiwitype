import React from 'react'

const FilterLink = ({active, children, onFilterClick}) => {
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

export default FilterLink