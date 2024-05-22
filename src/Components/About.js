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
          My name is Ishika Jaggi, persuing BTech in Computer Science and  Engineering at KIET Group of Institutions.
I have done my schooling from Silver Line Prestige School and scored 90.6 % in my 10th and 91.4% in 12th board examination.
 Besides studying, I love dancing and drawing, and I've won a bunch of awards for both. I also enjoy playing badminton and listening music.
My skills include having knowledge in HTML, CSS, Javascript, made few projects on it and Data structures and algorithms using Java language and now I m learning react.
I've worked on various projects but the favourite one was "Kisaan Sahayak" - A smart farming method to detect disease in crops/ plants.
My strength is that I can be a good team leader .Back in school, I was the Head Girl, which taught me a lot about leading and working with others.
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
