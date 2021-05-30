import React from 'react';
import './Header.css';
import Resume from '../image/my-cv-final.pdf';
import MyPhoto from '../image/Career-Software-Engineer.png';
import Typical from 'react-typical';

const Header = () => {
    return (
        <div className="full-header-area">
            <div className="container">
                <div className="inner-full-header-area">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center header-left">
                            <div>
                                <h1>     
                                <Typical
                                        steps={['HELLO',1000,'&',1000, 'WELCOME', 1000]}
                                        loop={Infinity}
                                        wrapper="p"
                                />
                              </h1>
                            <h5>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</h5>
                            <a href={Resume}  download>Get Resume</a>
                            </div>
                        </div>
                        <div className="col-md-6 header-right ">
                            <div>
                            <img src={MyPhoto} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;