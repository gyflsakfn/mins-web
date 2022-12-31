
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { login, logout, onUserStateChange } from '../../api/firebase';
import data from './data'
import './navbar.css'

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user)
      setUser(user);
    })
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  }

  const handleLogout = () => {
    logout().then(setUser);
  }


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
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  )
}

export default Navbar