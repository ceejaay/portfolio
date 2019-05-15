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

const ProjectImage = styled.div`
 width: 100%;

`

const Image = styled.img`
  border: solid black 1px;
  height: auto;
  max-width: 100%;

`

const Description = styled.div`
  width: 100%;

`

const Text = styled.p`
  font-size: 2em;
  width: 100%;
  margin: 0 0 10px 0;
`

const DescAndLinks = styled.div`
  width: 60%;
  margin: 0 3% 0;
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
                <ProjectImage>
                  <Image src={projData.image}  alt={projData.title}/>
                </ProjectImage>
                <DescAndLinks>
                  <Description>
                    <Text>
                      {projData.description}
                    </Text>
                  </Description>
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
                </DescAndLinks>
              </ProjectDescription>
            </ProjectPage>
            )
}



 

export default ItemPage;
