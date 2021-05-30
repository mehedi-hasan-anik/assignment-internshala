import React from 'react';
import './Resume.css';
import CV from '../image/my-cv-final.pdf';

const Resume = () => {
    return (
        <div className="full-resume-area">   
        <div class="container inner-full-resume-area">
            <h2>RESUME</h2>
             <div className="download-area">
                <a href={CV} download>GET RESUME</a>
             </div>
           <div className="row">
               <div className="col-md-12">
                   <div className="cart-area card">
                           <h3>Programming Knowledge</h3>
                                <ul>
                                    <li>Expertise: React, Bootstrap, JavaScript, REST API, ES6, React.js, Bootstrap4, HTML5, CSS3, WordPress</li>
                                    <li>Comfortable : Material UI,Node.js, Express.js, MongoDB, JSON, SASS</li>
                                    <li>Familiar : Redux.js, GraphQL, TypeScript, Laravel, jQuery, AJAX</li>
                                    <li>Tools : Git, Webpack, Create React App, NPM, VS Code, Chrome Dev tool, FirebaseNetlify, Heroku</li>
                                </ul>
                   </div>
               </div>
               <div className="col-md-12 ">
                   <div className="cart-area card" style={{margin:'10px'}}>
                   
                   <h3>Education</h3>
                        <div className="bsc">
                            <h4>B.S.C in Computer Science & Engineering (Running)</h4>
                            <p>Tejgaon College,National University of Bangladesh.</p>
                        </div>
                        <div className="hsc">
                            <h3>Higher Secondary</h3>
                            <ul>
                                <li>College : Ghatail Cantonment Public School & College</li>
                                <li>Group : Science</li>
                                <li>Passing Year : 2015</li>
                            </ul>
                        </div>
                   </div>
               </div>
           </div>
           <div className="row">
               <div className="col-md-12 ">
                   <div className="cart-area card" style={{margin:'10px'}}>
                   <h3>Experience</h3>
                        <h4>Web Design</h4>
                        <h6>FREELANCER</h6>
                        <h6>May 2021</h6>
                   </div>
               </div>
           </div>
       </div>
  </div> 
    );
};

export default Resume;