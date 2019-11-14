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
            <img src={logo} width="30" height="30" alt="TheMotoBible.com"/>
          </a>
          <Link to="/" className="navbar-brand">Home</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="navbar-item">
                <Link to="/chatroom" className="nav-link">Chatroom</Link>
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
        <Route path="/chatroom/" component={ChatroomComponent}/>
        <Route path="/minigames/" component={MinigamesComponent}/>
        <Route path="/resources" component={ResourcesComponent}/>

        <footer className="footer mt-auto py-3 bg-dark text-white">
          <div className="container-fluid row">
            <div className='col'>
              Newsletter signup for blog updates, policy updates, etc.
            </div>
            <div className='col'>
              Moto Bible About/Mission/etc
            </div>
            <div className='col'>
              Social icon links
            </div>
          </div>

          <div className="container-fluid row">
            contact info
          </div>

          <div className="container-fluid row">
          <div className='col'>
              Privacy policy and other
            </div>
            <div className='col'>
            © 2019 themotobible.com (Nicolas Layne) All Rights Reserved
            </div>
          </div>
        </footer>

      </div>

    </Router>
  );
}

export default App;
