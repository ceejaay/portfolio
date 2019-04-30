
import React from 'react';

// const { project } = props.location.state.projData
// console.log("project", project)

const ItemPreview = (props) => {
  return (
      <div>
        <div>
          {props.projData.name}
        </div>
        <div>
          <img src={props.projData.image}  alt={props.projData.name}/>
        </div>
      </div>
      )

}


export default ItemPreview;
