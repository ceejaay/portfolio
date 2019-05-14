import React from 'react';
import styled  from 'styled-components';

// const { project } = props.location.state.projData
// console.log("project", project)
          // <div className="desktop-version" style={divStyle}></div>

          // <img src={props.projData.image}  alt={props.projData.name}/>
          // <img src={props.projData.image}  alt={props.projData.name}/>
          // <div className="summary-img" style={divStyle}>
          // </div>
          //
const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: white;
  font-weight: 600;
  border-radius: 0px 0px 20px 20px;
  border-bottom: 1px gray solid;
  border-left: 1px gray solid;
  border-right: 1px gray solid;
  overflow: hidden;
`

const PreviewName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #282828;
  border: gray solid 1px;
  font-size: 2em;
`

const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const ItemPreview = (props) => {
  return (
      <Summary>
        <PreviewName>
          {props.projData.name}
        </PreviewName>
        <Image className="preview-image-div">
          <img src={props.projData.image} alt={'props.projData.name'}/>
        </Image>
      </Summary>
      )
}


export default ItemPreview;
