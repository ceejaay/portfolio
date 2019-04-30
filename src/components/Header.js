import React from 'react';  
import { Link  } from 'react-router-dom';

function Header() {
  return (

      <div className="header">
        <Link to={"/"} ><div className="header-buttons">Main</div> </Link>
        <Link to={"/resume"} ><div className="header-buttons">Resume</div> </Link>
      </div>
      )

  }


export default Header;
