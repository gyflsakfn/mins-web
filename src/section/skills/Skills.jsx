import Card from '../../component/Card'
import { RiReactjsLine } from "react-icons/ri";
import { BiData } from "react-icons/bi";
import { frontend, backend } from './data'

import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <p>I give you the best in all the services below</p>
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

export default Skills