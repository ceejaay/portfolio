import React from 'react';  
import { Link  } from 'react-router-dom';

function Header() {
  return (

      <div className="header">
        <div className="header-link-div">
          <Link to={"/#top"} ><div>Top</div> </Link>
          <Link to={"/#projects"} ><div>Projects</div> </Link>
          <Link to={"#"} ><div>Contact Me</div> </Link>
        </div>
      </div>
      )

  }


export default Header;
