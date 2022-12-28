
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import data from './data'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <HashLink to='#' className='nav__logo'>
          <h1>min.s</h1>
        </HashLink>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}>
              <HashLink to={item.link}>{item.title}</HashLink>
            </li>)
          }
        </ul>
        {/* <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette /></button> */}
      </div>
    </nav>
  )
}

export default Navbar