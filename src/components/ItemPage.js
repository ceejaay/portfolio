import React, {Component} from 'react';



const ItemPage = props  =>  {
  return(
      <div>
        <div className="project-headline">
          <h2>{props.name}</h2>
        </div>
        <div className="project-image">
           <a href={props.links}> <img src={props.imageName}  alt={props.title}/></a>
        </div>
        <div className="project-description">
          <p>
            {props.description}
          </p>

          <div className="project-links">
            <a href={props.links}>
              <div className="link-buttons">
                Live Project Link
              </div>
            </a>
            <a href={props.links}>
              <div className="link-buttons">
                Github Repository
              </div>
            </a>
            <a href={props.links}>
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
