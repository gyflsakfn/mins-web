import Card from '../../component/Card'
import { RiReactjsLine } from "react-icons/ri";
import { BiData } from "react-icons/bi";
import { frontend, backend } from './data'

import './skills.css'
import { memo } from 'react';

const Skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <p>기술 변화에 발맞춰 때로는 넓고 때로는 깊이 있게 기술을 습득하고 있습니다.</p>
      <div className="container skills__container">
        <Card className='skills'>
          <div className="skills__icon"><RiReactjsLine /></div>
          <div className="skills__details">
            <h4>Front-End</h4>
            <div className="skills__card">
              {
                frontend.map(item => (
                  <Card key={item.id} className="skill light">
                    <img src={item.logoImg} alt="" />
                    <h6>{item.title}</h6>
                  </Card>
                ))
              }
            </div>
          </div>
        </Card>
        <Card className='skills'>
          <div className="skills__icon"><BiData /></div>
          <div className="skills__details">
            <h4>Back-End</h4>
            <div className="skills__card">
              {
                backend.map(item => (
                  <Card key={item.id} className="skill light">
                    <img src={item.logoImg} alt="" />
                    <h6>{item.title}</h6>
                  </Card>
                ))
              }
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default memo(Skills)