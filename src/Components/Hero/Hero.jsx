import React from 'react'
import './Hero.css'
import profileimg from '../../assets/pass.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    //creating the hero main component
    //class-named hero to further add style to the elements in the css file
    //using image imported above in curly braces
    //adding an h1 and a p tag to describe the actions -- Connect with me & My Resume
  return (
    <div id='home' className='hero'>
      <img src={profileimg} alt="" />
      <h1><span>Im Rishuraj Singh, A Front-end Web Developer</span></h1>
      <p>I am a frontend developer from Siliguri, looking for an internship in the field of web development.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <a href='https://drive.google.com/file/d/1jcmZiPKXy4Bq2OvnD8cE1w2IBr1Xr3jY/view?usp=sharing'><div className="hero-resume">My Resume</div></a>
        
      </div>
    </div>
  )
}

export default Hero
