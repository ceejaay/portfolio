import React from 'react';
import pic from '../assets/dont_send_that_email.png';


const ItemPage = () => {
  return(
      <div>
        <div className="project-headline">
          <h2>Don't Send that Email</h2>
        </div>
        <div className="project-image">
            <img src={pic}  alt={"don't send that email"}/>
        </div>
        <div className="project-desription">
          <p>
            Don't send that email is a 
            The part I'm most proud of is working on is integrating the Watson API into the project. I researched the API and reported my research to my team. I wrote the code that retreived the information from the Watson API to the app. Then that was used to crunch the data put in by the user.

          </p>

          <div className="project-links">
          </div>
        </div>
      </div>
      )
}

export default ItemPage;
