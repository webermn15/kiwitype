import React from 'react'
import ListScore from './ListScore'
import ListExcerpt from './ListExcerpt'

const AsideList = ({asideList, asideFilter, onExcerptClick}) => (
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

export default AsideList