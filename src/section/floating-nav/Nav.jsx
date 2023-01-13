
const Nav = ({ className, item }) => {
  return (
    <li className={className}><a className="link-box" href={item.link}>{item.icon}</a></li>
  )
}

export default Nav