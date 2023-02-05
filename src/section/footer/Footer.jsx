import './footer.css'
import { links, socials } from '../../util/data'
import { HashLink } from 'react-router-hash-link'
import openOrAlert from '../../util/openOrAlert'
import { memo } from 'react'


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
          {
            socials.map(social => <button key={social.id} className='socials-button' onClick={openOrAlert(social.link)}>{social.icon}</button>)
          }
        </div>
        <div className="footer__say">
          <small>2023년의 김정민</small>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)