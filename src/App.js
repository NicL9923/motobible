import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand" href="/" target="_blank">
            <img src={logo} width="30" height="30" alt="TheMotoBible.com"/>
          </a>
          <Link to="/" className="navbar-brand">Home</Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
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
          </div>
          <div>Social icons</div>
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
                <input onSubmit="" type="email" className="" name="newsletterEmail" value="Email"/>
              </div>
              <p>contact info</p>
            </div>
            <div className='col'>
              <p>Moto Bible About/Mission/etc</p>
              <p>Privacy policy and other</p>
            </div>
            <div className='col'>
              <p>Social icon links</p>
              <p>© 2019 themotobible.com (Nicolas Layne) All Rights Reserved</p>
            </div>
          </div>

          <div className="container-fluid row">
            
          </div>

          <div className="container-fluid row">
          <div className='col'>
              
            </div>
            <div className='col'>
            
            </div>
          </div>
        </footer>

      </div>

    </Router>
  );
}

export default App;
