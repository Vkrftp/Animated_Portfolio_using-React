import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <div className="container" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
          <a href='https://github.com/Vkrftp' className="contact-items"><FaGithub className='icon'/></a>
          <a href='https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit' className="contact-items"><FaLinkedin className='icon'/></a>
          <a href='mailto:vkr2022002@gmail.com' target='__blank' className="contact-items"><IoMdMail className='icon'/></a>
          <a href='https://www.instagram.com/i_vinod_rajput?igsh=MWZubDFtMzk3OXN5eQ==' className="contact-items"><FaInstagram className='icon'/></a>
          <a href='/' className="contact-items"><FaFacebook className='icon'/></a>
        </div>
      </div>
    </>
  )
}

export default Contact
