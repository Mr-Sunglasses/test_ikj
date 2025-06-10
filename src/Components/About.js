import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, I’m Ishika Jaggi, a passionate and driven Computer Science graduate from KIET Group of Institutions. I have recently completed my B.Tech in Computer Science and Engineering, and I bring a unique blend of technical expertise and leadership experience. I possess strong technical skills in Java and Python programming, SQL, Web Development, and Object-Oriented Programming. During my internship at JSpiders Training and Development Center, I had the opportunity to work on a live project – Bucksmedia.in, a marketing agency website where I contributed to front-end development and functionality integration. One of my key projects includes developing a blogging platform, which enables users to create, edit, and manage blog posts with real-time content editing features and secure authentication. Alongside academics, I have actively participated in co-curricular activities. I serve as the Vice President of Phoenix Dance Crew, the official dance society of KIET, and have been an integral part of various technical clubs. My leadership and collaboration skills have been honed through these roles.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='python' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='arduino' />
        <Skills skill='Npm' />
        <Skills skill='Html'/>
        <Skills skill='css' />
      </div>
    </>
  )
}

export default About
