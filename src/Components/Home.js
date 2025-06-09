import React from 'react';
import Lottie from  "lottie-react";
import mobile from "../LottieFiles/mobile-first.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>ISHIKA JAGGI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={mobile} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          Hi, I’m Ishika Jaggi, a passionate and driven Computer Science graduate from KIET Group of Institutions. I have recently completed my B.Tech in Computer Science and Engineering, and I bring a unique blend of technical expertise and leadership experience.

I possess strong technical skills in Java and Python programming, SQL, Web Development, and Object-Oriented Programming. During my internship at JSpiders Training and Development Center, I had the opportunity to work on a live project – Bucksmedia.in, a marketing agency website where I contributed to front-end development and functionality integration.

One of my key projects includes developing a blogging platform, which enables users to create, edit, and manage blog posts with real-time content editing features and secure authentication.

Alongside academics, I have actively participated in co-curricular activities. I serve as the Vice President of Phoenix Dance Crew, the official dance society of KIET, and have been an integral part of various technical clubs. My leadership and collaboration skills have been honed through these roles.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
