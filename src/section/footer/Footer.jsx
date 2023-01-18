import './footer.css'
import { links, socials } from '../../util/data'
import { HashLink } from 'react-router-hash-link'
import React from 'react'
import openOrAlert from '../../util/openOrAlert'


const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className='nav__menu'>
          {
            links.map(item => <li key={item.id}>
              <HashLink to={item.link}>{item.title}</HashLink>
            </li>)
          }

        </ul>
        <div className="footer__socials">
          {/* TODO: 아이콘 위치 안맞어~ */}
          {
            socials.map(social => <button key={social.id} onClick={openOrAlert(social.link)}>{social.icon}</button>)
          }
        </div>
        <div className="footer__say">
          <small>2023년의 김정민</small>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)