import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {Route} from 'react-router-dom';
import ScrollableAnchor  from 'react-scrollable-anchor';
import {configureAnchors } from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';
// import ItemPage from './ItemPage';
import ItemPreview from './ItemPreview';
import mypicture from '../assets/chad_jemmett_picture.jpg';

// import imagePath from '../assets/';
import projectData from '../assets/json_data.js';
// import {FaLinkedin} from 'react-icons/fa';
// import {GoMarkGithub} from 'react-icons/go';
// import {MdEmail} from 'react-icons/md';
// import {MdPhone} from 'react-icons/md';


configureAnchors({offset: -55, scrollDuration: 2000})
const imgStyle = {
  backgroundImage: `url(${mypicture})`,
  height: '450px',
  width: '450px',
  borderRadius: "50%",
  backgroundSize: 'cover',
  backgroundPosition: '0px -40px',

}

            // <img src={"."} alt={'chad jemmett'} />
// <img src={pic}  alt={"chad.jemmett@gmail.com"}/>
// <img src={"https://www.dropbox.com/s/bl1yl0ld9js2xj1/chad_jemmett_picture.png"}  alt={"chad.jemmett@gmail.com"}/>
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
        <div  className="content-container">
          <div className="main-bio-content">
            <div className='headshot'>
              <div style={imgStyle}></div> 
            </div>
            <div className="main-bio-text">
              <div className="about-me">
                <div className="main-greeting-name">
                  <p>Hello! My name is </p>
                  <h1>Chad Jemmett</h1>
                </div>
                <div className="main-about-me-text">
                  <p>I'm a full-stack web developer. I'm skilled in React, Node, Javascript, Python, and Ruby.</p>
                </div>
              </div>
              <a className="main-cta-button " href='#projects'>See what I do</a>
            </div>
          </div>

          <ScrollableAnchor id={'projects'}>
            <div className="main-projects-header">
              <h2>
                Projects
              </h2>
            </div>
          </ScrollableAnchor>
          <div  className="main-preview-content">
          { this.state.projects.map((item)=>  {
            return (
              <Link key={item.id} to={`/${item.id}`}>
                <ItemPreview projData={item} key={item.id}/>
              </Link>
            )})}
          </div>
        </div>)
    }

  }

export default MainContent;
