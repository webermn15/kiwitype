import React from 'react'
import ListExcerpt from './ListExcerpt'
import ListHighScore from './ListHighScore'

const AsideList = ({asideList, onAsideClick}) => (
	<ul>
    {asideList.map(item => (
      <ListExcerpt key={item.id} {...item} onClick={() => onAsideClick(item)} />
    ))}
	</ul>
)

export default AsideList