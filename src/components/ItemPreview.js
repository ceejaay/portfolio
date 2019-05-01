
import React from 'react';

// const { project } = props.location.state.projData
// console.log("project", project)

          // <img src={props.projData.image}  alt={props.projData.name}/>
const ItemPreview = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.projData.image})`,
    height: '150px',
    maxWidth: '50%',
    borderRadius: "50%",
  }


  return (
      <div>
        <div className="preview-name">
          {props.projData.name}
        </div>
        <div className="preview-image">
          <div style={divStyle}></div>
        </div>
      </div>
      )

}


export default ItemPreview;
