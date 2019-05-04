import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import ItemPage from './ItemPage';
import ItemPreview from './ItemPreview';
import mypicture from '../assets/chad_jemmett_picture.png';
import emailPic from '../assets/email_pic.png';
import doa from '../assets/doa.png';
// import imagePath from '../assets/';
import projectData from '../assets/json_data.js';
import {FaLinkedin} from 'react-icons/fa';
import {GoMarkGithub} from 'react-icons/go';
import {MdEmail} from 'react-icons/md';
import {MdPhone} from 'react-icons/md';


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
        <div>
          <div>
            <img src={mypicture} alt={'chad jemmett'} />
          </div>
          <div>
            <p>Hello! My name is Chad Jemmett</p>
          </div>

          <div>
          { this.state.projects.map((item)=>  {
            return (
              <Link to={`/${item.id}`}>
                <ItemPreview projData={item} key={item.id}/>
              </Link>
            )})}
          </div>
        </div>)
    }

  }

export default MainContent;
