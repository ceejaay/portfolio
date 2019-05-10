import React from 'react';
import projectData from '../assets/json_data.js'



const ItemPage = props  =>  {
  const projData = projectData.projects.filter(item => item.id === props.match.params.id)[0];
        return(
            <div>
              <div>
                <h2>{projData.name}</h2>
              </div>
              <div >
                <img src={projData.image}  alt={projData.title}/>
              </div>
              <div >
                <p>
                  {projData.description}
                </p>
                <b>
                  {projData.notes}
                </b>


                <div>
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
