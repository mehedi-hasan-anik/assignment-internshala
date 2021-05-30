import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const About = [
        {name: "I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations."},
        
    ]
    const ourAddress = [
        // {name: "H#000(0th Floor), Road #00, new DOHS, Mohakhali, Dhaka, Bangladesh" , link: "//google.com/map"},
        // {name: "" , link: "//google.com/map"},
       
    ]
    const Home = [
        {name: "Home" , link: "/home"}
        
    ]
    const information = [
        {name: "About Us" , link: "/about"},
        {name: "Projects" , link: "/project"},
        {name: "Contact Us" , link: "/contact"}
    ]
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle={"About Me"} menuItems={About}/>
                <FooterCol key={2} menuTitle=" Information" menuItems={ information}/>
                <FooterCol key={3} menuTitle="Back To Home" menuItems={Home}/>
                <FooterCol key={4} menuTitle="Follow Me" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn" style={{background:'#00DBD0', color:'#fff'}}>+8801959109322</button>
                    </div>
                </FooterCol>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;