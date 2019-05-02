
import React from 'react';

// const { project } = props.location.state.projData
// console.log("project", project)
          // <div className="desktop-version" style={divStyle}></div>

          // <img src={props.projData.image}  alt={props.projData.name}/>
const ItemPreview = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.projData.image})`,
    height: '250px',
    width: '250px',
    borderRadius: "50%",
    backgroundSize: 'cover',
  }


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
