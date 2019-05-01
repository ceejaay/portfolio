
import React from 'react';


const Resume = () => {
  return(

     <div>
       <div className="resume-header">
         <h1>Chad Jemmett</h1>
         <email>chad.jemmett@gmail.com</email>
         <a href="https://github.com/ceejaay">Github repository</a>
         <a href="https://www.linkedin.com/in/chad-jemmett-a3a0a347/">LinkedIn Profile</a>
       </div>
       <div className="resume-skills">
         <h3>Skills</h3>
         <ul>
           <li>Javascript</li>
           <li>React</li>
           <li>NodeJS</li>
           <li>HTML</li>
           <li>CSS</li>
           <li>Ruby</li>
           <li>Python</li>
         </ul>

       </div>
       <div className="resume-projects">
         <h3>Projects</h3>
         <h4>Don't Send that Email</h4>
         <p>An app designed to analyze the emotional tone of an email or text message.</p>
           <ul>
             <li>Collaborated on technical design documents.</li>
             <li>Structured database model.</li>
             <li>Styled app with CSS and ReactStrap.</li>
             <li>Wrote React code for components that display data.</li>
             <li>Researched and implemented communication between app and Watson API.</li>
             <li>Wrote documentation to instruct future users and developers.</li>
           </ul>
         <h5>Technologies used</h5>
         <ul>
           <li>Javascript</li>
           <li>React</li>
           <li>NodeJS</li>
           <li>HTML</li>
           <li>CSS</li>
         </ul>
         <h4>Dead or Alive?</h4>
         <p>A quiz app that tests a user on whether a famous person is living or dead.</p>
         <ul>
           <li>Structured database model and wrote endpoints for front-end.</li>
           <li>Collaborated with front-end dev and project manager on planning and execution.</li>
           <li>Researched and implemented third-party APIs for app.</li>
           <li>Assisted with React programming on front-end.</li>
           <li>CSS</li>
         </ul>

         <h5>Technologies used</h5>
         <ul>
           <li>Javascript</li>
           <li>React</li>
           <li>NodeJS</li>
         </ul>

       </div>

       <div className="resume-job-history">

         <h3>Experience</h3>

         <h4>Stay-at-home-dad</h4>
         <p>2008 - Present</p>


         <h4>Overnight Supervisor, Crossroads Academy</h4>
         <p>Ogden, Utah</p>
         <p>August, 2015 - November, 2015</p>

         <ul>
           <li>Independently supervised 12 - 14 students during overnight shift.</li>
           <li>Communicated and socialized with students to build rapport.</li>
           <li>Reported student status and behavior to supervisor.</li>
         </ul>

         <h4>6:00 p.m. News Producer, KTVB</h4>
         <p>Boise, ID</p>
         <p>May, 2007 - July 2008</p>

         <ul>
           <li>Coordinated with 1 to 3 field crews to efficiently cover breaking news and assigned stories.</li>
           <li>Contributed story ideas and production plans during daily meetings.</li>
           <li>Collaborated with executive producer to maximize effectiveness of daily news program.</li>
         </ul>
       </div>




       <div className="resume-education">
         <h3>Education</h3>

         <h4>Lambda School</h4>

         <ul>
           <li>A 7+ month Computer Science & Software Engineering Academy that provided a full-time (40+ hours/week) hands-on curriculum focused on compute science, software engineering and web development.</li>
           <li>url here</li>
          </ul>

         <h4>Weber State University</h4>
         <ul>
           <li>Bachelor of Science in Communication</li>
         </ul>
       </div>
     </div>

      )
}

export default Resume;
