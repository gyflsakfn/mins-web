import './about.css'
import Sang from '../../assets/images/sang.jpg'
import Card from '../../component/Card'
import cardData from './cardData'
import { socials } from '../../util/data'
import { memo } from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Sang} alt="about img" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {
              cardData.map(item => (
                <Card key={item.id} className='about__card light cardhover'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>)
              )
            }
          </div>
          <p>내용 채우기! 1. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리나라 만세
            무궁화 삼천리 화려 강산
            대한 사람 대한으로 길이 보전하세</p>
          <p>안녕하세요. 저는 김정민입니다. 2. 남산 위에 저 소나무 철갑을 두른 듯
            바람 서리 불변함은 우리 기상일세
            무궁화 삼천리 화려 강산
            대한 사람 대한으로 길이 보전하세</p>
          <div className="about__socials">
            {
              socials.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)