import './button.css'

const Button = ({ text, color, type, onClick, size }) => {
  const btnColor = ["green", "red", "default"].includes(color)
    ? color
    : "default";

  return (
    <button
      className={["button", `button_${btnColor}`, `${size}`].join(" ")}
      onClick={onClick} type={type}
    >
      {text}
    </button>
  )
}

export default Button
