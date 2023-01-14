
import { HashLink } from 'react-router-hash-link';
import { IoSettingsOutline } from 'react-icons/io5'
import { links } from '../../util/data';
import './navbar.css'
import { useModalContext } from '../../context/ModalContext';
import React from 'react';

const Navbar = () => {
  const { showModalHandler } = useModalContext();

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
        <button id='theme__icon' onClick={showModalHandler} ><IoSettingsOutline /></button>
      </div>
    </nav>
  )
}

export default React.memo(Navbar);