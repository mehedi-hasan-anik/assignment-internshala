import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Skill from '../Skill/Skill';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Resume></Resume>
            <Blog></Blog>
            <Projects></Projects>
            <Skill></Skill>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;