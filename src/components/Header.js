import React from 'react';
import {configureAnchors } from 'react-scrollable-anchor';
import { Link  } from 'react-router-dom';
// import { goToTop } from 'react-scrollable-anchor';

configureAnchors({offset: -55, scrollDuration: 2000})
function Header() {
  return (

      <div className="header">
        <div className="header-link-div">
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact Me</Link>
          <a  href='/'>Top</a>
        </div>
      </div>
      )

  }


export default Header;
