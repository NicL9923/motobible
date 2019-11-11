import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./resources/motoBibleLogo.png";

import HomeComponent from "./components/HomeComponent";
import BlogComponent from "./components/BlogComponent";
import ChatroomComponent from "./components/ChatroomComponent";
import MinigamesComponent from "./components/MinigamesComponent";
import ResourcesComponent from "./components/ResourcesComponent";

function App() {
  return (
    <Router>
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/" target="_blank">
            <img src={logo} width="30" height="30" alt="MotorcyclistsBible.com"/>
          </a>
          <Link to="/" className="navbar-brand">Home</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="navbar-item">
                <Link to="/chatroom" className="nav-link">Live Chat</Link>
              </li>
              <li className="navbar-item">
                <Link to="/minigames" className="nav-link">Minigames</Link>
              </li>
              <li className="navbar-item">
                <Link to="/resources" className="nav-link">Resources</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <Route path="/" exact component={HomeComponent}/>
        <Route path="/blog" component={BlogComponent}/>
        <Route path="/chatroom/:uid" component={ChatroomComponent}/>
        <Route path="/minigames/:uid" component={MinigamesComponent}/>
        <Route path="/resources" component={ResourcesComponent}/>

        <footer className='footer mt-auto py-3 bg-dark text-white'>
          <div className='container'>Sticky footer</div>
        </footer>

      </div>

    </Router>
  );
}

export default App;
