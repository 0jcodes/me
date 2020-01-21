import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './home'
import About from './about'
import Skills from './skills'
import Portfolio from './portfolio'
import Pages from './pages'
import Blog from './blog'
import BlogDetails from './blogdetails'
import Contact from './contact'


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact render={() =>{return(<Home />)}} />
        <Route path="/about" exact render={() =>{return(<About />)}} />
        <Route path="/skills" exact render={() =>{return(<Skills />)}} />
        <Route path="/portfolio" exact render={() =>{return(<Portfolio />)}} />
        <Route path="/pages" exact render={() =>{return(<Pages />)}} />
        <Route path="/blog" exact render={() =>{return(<Blog />)}} />
        <Route path="/blog-details" exact render={() =>{return(<BlogDetails />)}} />
        <Route path="/contact" exact render={() =>{return(<Contact />)}} />
      </Router>
    );
  }
}

export default App;