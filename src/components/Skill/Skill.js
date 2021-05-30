import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <div className="full-skill-area">  
        <div className="container inner-full-skill-area">
             <h2>SKILL</h2>
            <div className="wrap">
                <div className="bar">
                    <h3>REACT <abbr>80%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>JAVASCRIPT <abbr>80%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>NODEJS <abbr>70%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>HTML5 <abbr>90%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>CSS3 <abbr>80%</abbr></h3>
                    <span></span>
                </div>
                <div className="bar">
                    <h3>PHOTOSHOP <abbr>80%</abbr></h3>
                    <span></span>
                </div>
            </div>
        </div>
     </div> 
    );
};

export default Skill;