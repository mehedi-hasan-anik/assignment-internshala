import React from 'react';
import './About.css';
import  MyPhoto from '../image/Untitled-4_50.png';

const About = () => {
    return (
        <div className="full-about-area">
        <div className="container">
           <div className="inner-about-area row">
               <div className="about-photo-area col-md-6">
                    <img src={MyPhoto} alt="" className="img-fluid"/>
               </div>
               <div className="about-details-area col-md-6 d-flex  align-items-center">
                   <div>
                       <h2>I AM MD. <span style={{color:'#00DBD0'}}>ANIK MIAH</span></h2>
                       <p>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>

                       <h6>Full Name : Md. Anik Miah</h6>
                       <h6>Age : 24</h6>
                       <h6>Nationality: Bangladeshi</h6>
                       <h6>Language : Bangla, English</h6>
                       <h6>Address: Dhaka, Bangladesh</h6>
                       <h6>Freelance: Available</h6>
                   </div>
               </div>
           </div>
           
       </div>
      </div>
    );
};

export default About;