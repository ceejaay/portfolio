import React from 'react';
import projectData from '../assets/json_data.js'



const ItemPage = props  =>  {
  // console.log("from params", props.match.params.id[0] )
  //
  const projData = projectData.projects.find(item => {
    let paramId = Number(props.match.params.id)
    return item.id === paramId 
  })
        return(
            <div className="project-page-container">
              <div className="project-page-name">
                <h1>{projData.name}</h1>
              </div>

              <div className="project-image-description">
                <div className="project-page-image">
                  <img src={projData.image}  alt={projData.title}/>
                </div>
                <div className="project-description-and-links">
                  <div className="project-page-description">
                    <p>
                      {projData.description}
                    </p>
                  </div>
                  <div className="project-page-notes">
                    <b>
                      {projData.notes}
                    </b>
                  </div>
                  <div className="project-page-links">
                    <a href={projData.links.liveSite}>
                        Live Project Link
                    </a>
                    <a href={projData.links.github}>
                        Github Repository
                    </a>
                    <a href={projData.links.pullRequests}>
                        Link to My Pull Requests
                    </a>
                  </div>

                </div>
              </div>
            </div>
            )
}



 

export default ItemPage;
