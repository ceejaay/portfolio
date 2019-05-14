import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ScrollableAnchor  from 'react-scrollable-anchor';
import {configureAnchors } from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';
import ItemPreview from './ItemPreview';
import mypicture from '../assets/chad_jemmett_picture.jpg';
import styled  from 'styled-components';
import projectData from '../assets/json_data.js';

const BioText = styled.p`
  font-size: 1em;
`

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  /* margin: 10px 3%; */
  font-size: 3em;
`

const GreetingName = styled.div`
    display: flex;
    width: 100%;
`

const Headshot = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;

`

const MainBioText = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-left: 9%;
`

const AboutMeBox = styled.div`
    display: flex;
    flex-direction: column;

`

const MainBioContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 250px;
  margin-top: 100px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const PreviewContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 300px;
`



configureAnchors({offset: -55, scrollDuration: 2000})
const imgStyle = {
  backgroundImage: `url(${mypicture})`,
  height: '450px',
  width: '450px',
  borderRadius: "50%",
  backgroundSize: 'cover',
  backgroundPosition: '0px -40px',

}

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
        <ContentContainer>
          <MainBioContent>
            <Headshot>
              <div style={imgStyle}></div> 
            </Headshot>
            <MainBioText>
              <AboutMeBox>
                <GreetingName className="main-greeting-name">
                  <p>Hello! My name is </p>
                  <h1>Chad Jemmett</h1>
                </GreetingName>
                <AboutMe>
                  <BioText>
                    I'm a full-stack web developer. I'm skilled in React, Node, Javascript, Python, and Ruby.
                  </BioText>
                </AboutMe>
              </AboutMeBox>
              <a className="main-cta-button " href='#projects'>See what I do</a>
            </MainBioText>
          </MainBioContent>

          <ScrollableAnchor id={'projects'}>
            <div className="main-projects-header">
              <h2>
                Projects
              </h2>
            </div>
          </ScrollableAnchor>
          <PreviewContent className='main-preview-content'>
          { this.state.projects.map((item)=>  {
            return (
              <Link key={item.id} to={`/${item.id}`}>
                <ItemPreview projData={item} key={item.id}/>
              </Link>
            )})}
          </PreviewContent>
        </ContentContainer>
      )
    }

  }

export default MainContent;
