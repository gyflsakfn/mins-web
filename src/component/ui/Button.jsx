import './button.css'
import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button className='googleBtn' onClick={onClick}>{text}</button>
  )
}

export default Button