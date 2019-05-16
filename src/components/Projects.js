import React, {Component} from 'react';
import styled  from 'styled-components';
import projectData from '../assets/json_data.js';
import {Link} from 'react-router-dom';
import ItemPreview from './ItemPreview';

const PreviewContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2%;
`

const ProjectContainer = styled.div`
  margin-top: 65px;
`

const Preview = styled(ItemPreview)`
  width: 90%;

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
          <PreviewContent>
          { this.state.projects.map((item)=>  {
            return (
              <Link key={item.id} to={`/${item.id}`}>
                <Preview projData={item} key={item.id}/>
              </Link>
            )})}
          </PreviewContent>
        </ProjectContainer>
        )

  }



}



export default Projects;
