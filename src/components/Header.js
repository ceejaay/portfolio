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
  line-height: 55;
  margin-bottom: 55px;
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
      <HeaderDiv className="header">
        <LinkDiv>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact Me</Link>
          <a  href='/'>Top</a>
        </LinkDiv>
      </HeaderDiv>
      )

  }


export default Header;
