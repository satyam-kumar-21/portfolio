import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/flipkart.png'
import IMG2 from '../../assets/lms.jpg'
import IMG3 from '../../assets/portfolio.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Flipkart</h3>
            <small className='text-light'>ReactJs | NodeJs | MongoDB</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/satyam-kumar-21/flipkart-clone" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Beauty Garden</h3>
            <small className='text-light'>ReactJs | NodeJs | ExpressJs | MongoDb</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/satyam-kumar-21/LMS" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/satyam-kumar-21/portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              
            </div>
            
        </article>
       
      </div>
    </section>
  )
}

export default Myprojects