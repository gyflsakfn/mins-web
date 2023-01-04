import './about.css'
import AboutProfile from '../../assets/images/aboutProfile.jpg'
import Card from '../../component/Card'
import cardData from './cardData'
import contectData from './contectData'

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutProfile} alt="about img" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {
              cardData.map(item => (
                <Card key={item.id} className='about__card light'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>)
              )
            }
          </div>
          <p>Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!</p>
          <p>Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!</p>
          <div className="about__socials">
            {
              contectData.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About