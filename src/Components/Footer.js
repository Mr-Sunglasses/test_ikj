import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/ishika1211" target='_blank'><FaGithub/></a>
        <a href='mailTo:ishikajaggi765@gmail.com' target='_blank'><GrMail/></a>
        <a href='https://www.instagram.com/its_.ishikaaaa/' target='_blank'><FaInstagram/></a>
        <a href='https://www.linkedin.com/in/ishika-jaggi-aa4b54258/' target='_blank'><FaLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer