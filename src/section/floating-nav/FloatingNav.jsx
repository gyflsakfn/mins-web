import data from './data'
import Scrollspy from 'react-scrollspy'
import Nav from './Nav'
import './floating-nav.css'
import React, { memo } from 'react'

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy offset={-350} className='scrollspy' items={['banner', 'about', 'skills', 'portfolio', 'comments']} currentClassName="active">
        {
          data.map(item => <Nav key={item.id} item={item} />)
        }
      </Scrollspy>
    </ul>
  )
}

export default memo(FloatingNav);