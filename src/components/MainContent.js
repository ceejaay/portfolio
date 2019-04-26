import React, { Component } from 'react';
import pic from '../assets/chad_jemmett_picture.png';
import {FaBeer} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {GoMarkGithub} from 'react-icons/go';
import {MdEmail} from 'react-icons/md';
import {MdPhone} from 'react-icons/md';


function MainContent() {
  return (
      <div>
        <div className="content-container">
          <div className='headshot'>
            <img src={pic} />
          </div>
          <div className="contact-links">
              <div>
                <GoMarkGithub className="icons" />
              </div>
              <div>
                <FaLinkedin className="icons"/>
              </div>
              <div>
                <MdEmail className="icons"/>
              </div>
              <div>
                <MdPhone className="icons"/>
              </div>
            </div>
          </div>
          <div className="about-me">
            <p>
              Hi, I'm Chad Jemmett. I'm a full-stack web developer. My background is in communication and broadcast. I love building tools that help people communicate. Check out my portfolio and my resume
            </p>


        </div>
      </div>)

  }

export default MainContent;
