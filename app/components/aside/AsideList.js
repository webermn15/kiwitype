import React from 'react'
import ListScore from './ListScore'
import ListExcerpt from './ListExcerpt'

const AsideList = ({asideList, asideFilter, onExcerptClick}) => {
  if (asideList.length == 0) {
    return(
      <div>No records found!</div>
    )
  }
  return(
  	<ul>
      {asideFilter 
      ? 
      asideList.map((item, i) => (
        <ListExcerpt key={i} {...item} onClick={() => onExcerptClick(item)} />
      ))
      : 
      asideList.map((item, i) => (
        <ListScore key={i} {...item} />
      ))}
  	</ul>
  )
}

export default AsideList