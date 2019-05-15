import React from 'react';
import projectData from '../assets/json_data.js'
import styled  from 'styled-components';

const ProjectPage = styled.div`
 display: flex;
 flex-direction: column;
 margin: 55px 3% 0 3%;

`

const ProjectName = styled.div`

`

const NameH1 = styled.h1`
  font-size: 4em;
`

const ProjectDescription = styled.div`
  display: flex;
`

const Notes = styled.div`
  font-size: 2em;
  margin: 10px 0;
`

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  margin: 10px 0;
`

const ExternalLinks = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
    border: 1px black solid;
    width: 100%;
    height: 35px;
    margin: 7px 0;
    padding: 5px 0;
    color: #282828;
    &:hover {
      background: lightgray;
      opacity: 0.5;
    }
`



const ItemPage = props  =>  {
  // console.log("from params", props.match.params.id[0] )
  //
  const projData = projectData.projects.find(item => {
    let paramId = Number(props.match.params.id)
    return item.id === paramId 
  })
        return(
            <ProjectPage>
              <div>
                <NameH1>{projData.name}</NameH1>
              </div>

              <ProjectDescription>
                <div className="project-page-image">
                  <img src={projData.image}  alt={projData.title}/>
                </div>
                <div className="project-description-and-links">
                  <div className="project-page-description">
                    <p>
                      {projData.description}
                    </p>
                  </div>
                  <Notes>
                    <b>
                      {projData.notes}
                    </b>
                  </Notes>
                  <ProjectLinks>
                    <ExternalLinks href={projData.links.liveSite}>
                        Live Project Link
                    </ExternalLinks>
                    <ExternalLinks href={projData.links.github}>
                        Github Repository
                    </ExternalLinks>
                    <ExternalLinks href={projData.links.pullRequests}>
                        Link to My Pull Requests
                    </ExternalLinks>
                  </ProjectLinks>

                </div>
              </ProjectDescription>
            </ProjectPage>
            )
}



 

export default ItemPage;
