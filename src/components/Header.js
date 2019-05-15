import React from 'react';
import {configureAnchors } from 'react-scrollable-anchor';
import { Link  } from 'react-router-dom';
import styled  from 'styled-components';
// import { goToTop } from 'react-scrollable-anchor';
//
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #282828;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
  height: 55px;
  line-height: 55px;
  margin-bottom: 55px;
`

const HeaderLinks =  styled(Link)`
  color: white;
  font-weight: 700;
  line-height: 55px;
`

const LinkDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  width: 50%;
  font-weight: 600;
  font-size: 2.5em;

`


configureAnchors({offset: -55, scrollDuration: 2000})
function Header() {
  return (
      <HeaderDiv>
        <LinkDiv>
          <HeaderLinks to={"/"}>Home</HeaderLinks>
          <HeaderLinks to={"/projects"}>Projects</HeaderLinks>
          <HeaderLinks to={"/contact"}>Contact Me</HeaderLinks>
        </LinkDiv>
      </HeaderDiv>
      )

  }


export default Header;
