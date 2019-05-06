import React from 'react';  
import { Link  } from 'react-router-dom';

function Header() {
  return (

      <div className="header">
        <div className="header-link-div">
          <Link to={"/"} ><div>Main</div> </Link>
          <Link to={"#"}><div >Resume</div> </Link>
          <Link to={"#"} ><div>Contact Me</div> </Link>
        </div>
      </div>
      )

  }


export default Header;
