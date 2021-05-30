import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigaton/Navigation';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Skill from './components/Skill/Skill';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation></Navigation>
            <Switch>
                  
                  <Route path="/home">
                     <Home></Home>
                  </Route>
                  <Route path="/contact">
                     <Contact></Contact>
                  </Route>
                  <Route path="/skill">
                     <Skill></Skill>
                  </Route>
                  <Route path="/resume">
                     <Resume></Resume>
                  </Route>
                  <Route path="/blog">
                     <Blog></Blog>
                  </Route>
                  <Route path="/project">
                     <Projects></Projects>
                  </Route>
                  <Route path="/about">
                     <About></About>
                  </Route>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
