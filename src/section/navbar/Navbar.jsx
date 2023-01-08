
import { HashLink } from 'react-router-hash-link';
import Button from '../../component/ui/Button';
import User from '../../component/User';
import { IoSettingsOutline } from 'react-icons/io5'
import { useAuthContext } from '../../context/AuthContext';
import { links } from '../../util/data';
import './navbar.css'
import { useModalContext } from '../../context/ModalContext';

const Navbar = () => {
  const { user, login, logout } = useAuthContext();
  const { showModalHandler } = useModalContext();

  const handleLogin = () => {
    login();
  }

  const handleLogout = () => {
    logout();
  }

  return (
    <nav>
      <div className="container nav__container">
        <HashLink to='/#' className='nav__logo'>
          <h1>min.s</h1>
        </HashLink>
        <ul className='nav__menu'>
          {
            links.map(item => <li key={item.id}>
              <HashLink to={item.link}>{item.title}</HashLink>
            </li>)
          }
        </ul>
        {/* <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette /></button> */}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={handleLogin} />}
        {user && <Button text={'Logout'} onClick={handleLogout} />}
        <button id='theme__icon' onClick={showModalHandler} ><IoSettingsOutline /></button>
      </div>
    </nav>
  )
}

export default Navbar