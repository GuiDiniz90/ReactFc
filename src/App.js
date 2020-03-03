import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Login from './Controller/LoginCtrl';
import{Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/login" component={Login} />
    

    </div>
  );
}

export default App;
