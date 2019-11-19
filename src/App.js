import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./resources/motoBibleLogo.png";

import Clock from './components/subcomponents/Clock';

import HomeComponent from "./components/HomeComponent";
import BlogComponent from "./components/BlogComponent";
import ChatroomComponent from "./components/ChatroomComponent";
import MinigamesComponent from "./components/MinigamesComponent";
import ResourcesComponent from "./components/ResourcesComponent";

function App() {
  return (
    <Router>
      <div className="container bg-light">

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
          <a className="navbar-brand" href="/" target="_blank">
            <img src={logo} width="30" height="30" alt="TheMotoBible.com"/>
          </a>
          <Link to="/" className="navbar-brand">Home</Link>

          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#collapsedStuff" aria-controls="collapsedStuff" aria-expanded="false">
            <span className="navbar-toggler-icon"/>
          </button>

          <div id="collapsedStuff" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/chatroom" className="nav-link">Chatroom</Link>
              </li>
              <li className="nav-item">
                <Link to="/minigames" className="nav-link">Minigames</Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link">Resources</Link>
              </li>
            </ul>
            <Clock/>
          </div>
        </nav>
        
        <Route path="/" exact component={HomeComponent}/>
        <Route path="/blog" component={BlogComponent}/>
        <Route path="/chatroom/" component={ChatroomComponent}/>
        <Route path="/minigames/" component={MinigamesComponent}/>
        <Route path="/resources" component={ResourcesComponent}/>

        <footer className="footer bg-dark text-light text-center">
          <div className="container-fluid row">
            <div className='col'>
              <div>
                Newsletter signup for blog updates, policy updates, etc.
                <input onSubmit="" type="email" className="" name="newsletterEmail" placeholder="Email"/>
              </div>
              <p>contact info</p>
            </div>
            <div className='col'>
              <p>Moto Bible About/Mission/etc</p>
              <p>Privacy policy and other</p>
            </div>
            <div className='col'>
              <p>Social icon links</p>
              <p>© 2019 themotobible.com All Rights Reserved</p>
            </div>
          </div>
        </footer>

      </div>

    </Router>
  );
}

export default App;
