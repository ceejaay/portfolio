import React, {Component} from 'react';



const ItemPage = props  =>  {
  const { projData } = props.location.state;
  console.log("links?", projData.links.liveSite);
  return(
      <div>
        <div className="project-headline">
          <h2>{projData.name}</h2>
        </div>
        <div className="project-image">
          <img src={projData.image}  alt={projData.title}/>
        </div>
        <div className="project-description">
          <p>
            {projData.description}
          </p>

          <div className="project-links">
            <a href={projData.links.liveSite}>
              <div className="link-buttons">
                Live Project Link
              </div>
            </a>
            <a href={projData.links.github}>
              <div className="link-buttons">
                Github Repository
              </div>
            </a>
            <a href={projData.links.pullRequests}>
              <div className="link-buttons">
                Link to My Pull Requests
              </div>
            </a>
          </div>
        </div>
      </div>
      )
}



 

export default ItemPage;
