
import React from 'react';

// const { project } = props.location.state.projData
// console.log("project", project)
          // <div className="desktop-version" style={divStyle}></div>

          // <img src={props.projData.image}  alt={props.projData.name}/>
          // <img src={props.projData.image}  alt={props.projData.name}/>
const ItemPreview = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.projData.image})`,
  }


  return (
      <div className="project-summary">
        <div className="preview-name">
          {props.projData.name}
        </div>
        <div className="preview-image-div">
          <div className="summary-img" style={divStyle}>
          </div>
        </div>
      </div>
      )

}


export default ItemPreview;
