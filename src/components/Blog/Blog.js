import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Photo1 from '../image/download (1).jfif';
import Photo2 from '../image/download (1).png';
import Photo3 from '../image/download (2).png';
import Photo4 from '../image/images.png';

const Blog = () => {
    return (
        <div className="full-blog-area">
           <div className="container">
               <div className="inner-full-blog-area">
                   <h2>BLOG</h2>
                     <div className="row">
                         <div className="col-md-6 mb-5">
                             <a href="https://anikm2283.medium.com/10-tricky-things-of-javascript-dc1f7e953fe6">
                             <div className="single-blog">
                                <img src={Photo1} alt="" />
                                <h5>10 Tricky things of JavaScript</h5>
                             </div>
                             </a>
                         </div>
                         <div className="col-md-6 mb-2">
                            <a href="https://anikm2283.medium.com/10-tricks-of-react-fc8a7208b635">
                            <div className="single-blog">
                                <img src={Photo2} alt="" />
                                <h5>10 tricks of react</h5>
                            </div>
                            </a>
                         </div>
                         <div className="col-md-6 mb-2">
                             <a href="https://anikm2283.medium.com/important-note-for-javascript-developer-13d8c8e390b">
                             <div className="single-blog">
                                <img src={Photo3} alt="" />
                                <h5>Important note for JavaScript developer</h5>
                             </div>
                             </a>
                         </div>
                         <div className="col-md-6 mb-2">
                             <a href="https://anikm2283.medium.com/10-tricks-for-new-javascript-developers-2c25bea9f5d9">
                             <div className="single-blog">
                                <img src={Photo4} alt="" />
                                <h5>10 tricks of JavaScript</h5>
                             </div>
                             </a>
                         </div>
                     </div>
               </div>
           </div>
        </div>
    );
};

export default Blog;