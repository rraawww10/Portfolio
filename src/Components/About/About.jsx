import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/himage.jpg'

//an arrow function that is returning a div inside which whole design of the aout page is embeded.
const About = () => {
//The about div contains the title 'About Me' in h1 tag and an image in the image tag.
//The about sections is the parent section of three child divs-about left, about right, about para.
//The about left para contains two paragraphs for reference.
//The about skills sections underlines the various skills that are known to me.
//Further at the bottom the three achievements div displays my expertise and project experience and the languages I know.
//ALL OF THE divs are class-named and designed accordingly int the about.css file. 

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an enthusiastic Frontend Developer with expertise in the languages like Javascript and various frameworks like ReactJs and Bootsrap.</p>
                <p>My passion for web development has led me to work on wonderful projects, and I aspire to continue doing better by being a part of your organization.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECT DEPLOYMENTS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8+</h1>
            <p> FRONTEND PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>LANGUAGES KNOWN</p>
        </div>
      </div>
    </div>
  )
}

export default About
