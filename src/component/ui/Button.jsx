import './button.css'
import React from 'react'

const Button = ({ text, type, onClick, size }) => {
  const btnType = ["green", "red", "default"].includes(type)
    ? type
    : "default";

  return (
    <button
      className={["button", `button_${btnType}`, `${size}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
