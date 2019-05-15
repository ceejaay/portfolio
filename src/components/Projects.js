import React, {Component} from 'react';
import styled  from 'styled-components';
import projectData from '../assets/json_data.js';
import {Link} from 'react-router-dom';
import ItemPreview from './ItemPreview';

const PreviewContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 300px;
`

const ProjectContainer = styled.div`
  margin-top: 65px;
`

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    this.setState({projects: projectData.projects})

  }
  render(){
    return (
        <ProjectContainer>
          <PreviewContent className='main-preview-content'>
          { this.state.projects.map((item)=>  {
            return (
              <Link key={item.id} to={`/${item.id}`}>
                <ItemPreview projData={item} key={item.id}/>
              </Link>
            )})}
          </PreviewContent>
        </ProjectContainer>
        )

  }



}



export default Projects;
