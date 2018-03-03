import React from 'react'
import ListScore from './ListScore'
import ListExcerpt from './ListExcerpt'

const AsideList = ({asideList, asideFilter, onAsideClick}) => (
	<ul>
    {asideFilter 
    ? 
    asideList.map((item, i) => (
      <ListScore key={i} {...item} />
    ))
    :
    asideList.map((item, i) => (
      <ListExcerpt key={i} {...item} onClick={() => onAsideClick(item)} />
    )) }
	</ul>
)

export default AsideList