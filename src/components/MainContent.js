import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import pic from '../assets/chad_jemmett_picture.png';
// import imagePath from '../assets/';
import projectData from '../assets/json_data.js';
import {FaLinkedin} from 'react-icons/fa';
import {GoMarkGithub} from 'react-icons/go';
import {MdEmail} from 'react-icons/md';
import {MdPhone} from 'react-icons/md';


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }

  }


  componentDidMount () {
    this.setState({projects: projectData.projects})
  }


  render() {
    return (
        <div>
          <div className="content-container">
            <div className='headshot'>
              <img src={pic}  alt={"chad.jemmett@gmail.com"}/>
            </div>
            <div className="contact-links">
                <div>
                  <a href="https://github.com/ceejaay"><GoMarkGithub className="icons" /></a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/chad-jemmett-a3a0a347/"><FaLinkedin className="icons"/></a>
                </div>
                <div>
                  <a href="mailto:chad.jemmett@gmail.com"><MdEmail className="icons"/></a>
                </div>
                <div>
                  <a href="tel:12083500359"><MdPhone className="icons"/></a>
                </div>
              </div>
            </div>
            <div className="about-me">
              <p>
                Hi, I'm Chad Jemmett. I'm a full-stack web developer. My background is in communication and broadcast. I love building tools that help people communicate. Check out my portfolio and my resume
              </p>
          </div>
          <div className="project-summary">
          {
            this.state.projects.map((item, i)=>  {
                  return (
                    <div key={i}>
                      <h4>{item.name}</h4>
                      <div>
                        <img src={item.image} alt={item.title}/>
                      </div>
                    </div>
                    )
              }
            )
          }
          </div>
        </div>)
    }

  }

export default MainContent;
