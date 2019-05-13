import React from 'react';
import projectData from '../assets/json_data.js'



const ItemPage = props  =>  {
  // console.log("from params", props.match.params.id[0] )
  //
  const projData = projectData.projects.find(item => {
    let paramId = Number(props.match.params.id)
    return item.id === paramId 
  })

  // console.log("array: ", projectData.projects)

  // const projData = projectData.projects.find(item => item.id === props.match.params.id);
  // console.log("proj data: ", projData)
  // console.log(projData);
        return(
            <div className="project-page-container">
              <div className="project-page-name">
                <h1>{projData.name}</h1>
              </div>
              <div className="project-page-image" >
                <img src={projData.image}  alt={projData.title}/>
              </div>
              <div className="project-page-description" >
                <p>
                  {projData.description}
                </p>
                <div className="project-page-notes">
                  <b>
                    {projData.notes}
                  </b>
                </div>


                <div className="project-page-links">
                  <a href={projData.links.liveSite}>
                    <div>
                      Live Project Link
                    </div>
                  </a>
                  <a href={projData.links.github}>
                    <div>
                      Github Repository
                    </div>
                  </a>
                  <a href={projData.links.pullRequests}>
                    <div>
                      Link to My Pull Requests
                    </div>
                  </a>
                </div>
              </div>
            </div>
            )
  // const { projData } = props.location.state;
  // console.log("links?", projData.links.liveSite);
}



 

export default ItemPage;
