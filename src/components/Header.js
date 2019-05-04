import React from 'react';  
import { Link  } from 'react-router-dom';

function Header() {
  return (

      <div className="header">
        <Link to={"/"} ><div>Main</div> </Link>
        <Link to={"/resume"}><div >Resume</div> </Link>
        <Link to={"#"} ><div>Contact Me</div> </Link>
      </div>
      )

  }


export default Header;
