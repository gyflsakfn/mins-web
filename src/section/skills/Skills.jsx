import Card from '../../component/Card'
import { RiReactjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import data from './data'

import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <p>I give you the best in all the services below</p>
      <div className="container skills__container">
        <Card className='skills'>
          <div className="skills__icon"><FaReact /></div>
          <div className="skills__details">
            <h4>Front-End</h4>
            <div className="skills__card">
              {
                data.map(item => (
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