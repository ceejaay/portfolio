import React, { Component } from 'react';
import pic from '../assets/chad_jemmett_picture.png';


function MainContent() {
  return (
      <div>
        <div className="content-container">
          <div className='headshot'>
            <img src={pic} />
            my pic
          </div>
          <div className="contact-links">
              <div>
                git hub
              </div>
              <div>
                linkedin
              </div>
              <div>
              gmail
              </div>
              <div>
             phone
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
