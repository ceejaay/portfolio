
import React from 'react';

// const { project } = props.location.state.projData
// console.log("project", project)

const ItemPreview = (props) => {
  return (
      <div>
        <div className="preview-name">
          {props.projData.name}
        </div>
        <div className="preview-image">
          <img src={props.projData.image}  alt={props.projData.name}/>
        </div>
      </div>
      )

}


export default ItemPreview;
