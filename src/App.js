import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import fire from "./firebase";
import logo from "./resources/motoBibleLogo.png";

import HomeComponent from "./components/HomeComponent";
import BlogComponent from "./components/BlogComponent";
import ChatroomComponent from "./components/ChatroomComponent";
import MinigamesComponent from "./components/MinigamesComponent";
import ResourcesComponent from "./components/ResourcesComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import AdminComponent from "./components/AdminComponent";
import LogoutComponent from "./components/LogoutComponent";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  authCheck = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.setState({ user });
      } else {
        // User is signed out.
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authCheck();
  }
  
  render() {
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
            <div className="navbar-nav">
              {/*If the user is signed in, display Logout, otherwise Login/Register*/}
              {this.state.user ? (<Link to="/logout" className="nav-link">Logout</Link>) : (<div className="row"><Link to="/login" className="nav-link">Login</Link>
                                        <Link to="/register" className="nav-link">Register</Link></div>)}
            </div>
          </div>
        </nav>
        
        <Route path="/" exact component={HomeComponent}/>
        <Route path="/blog" component={BlogComponent}/>
        <Route path="/chatroom/" component={ChatroomComponent}/>
        <Route path="/minigames/" component={MinigamesComponent}/>
        <Route path="/resources" component={ResourcesComponent}/>

        <Route path="/login" component={LoginComponent}/>
        <Route path="/register" component={RegisterComponent}/>
        <Route path="/logout" component={LogoutComponent}/>

        <Route path="/admin" component={AdminComponent}/>

        <footer className="footer bg-dark text-light">
          <div className="container-fluid row p-6">
            <div className='col'>
              <div className="container">
                <p>Sign up for our weekly newsletter:</p>
                <input onSubmit="" type="email" className="form-control" name="newsletterEmail" placeholder="Email"/>
              </div>
              <div className="container">
                <p>support@themotobible.com</p>
                <p>Based in Houston, TX</p>
              </div>
            </div>
            <div className='col text-center'>
              <h5>About Us</h5>
              <p>The Motorcyclist's Bible, or Moto Bible, was made

              </p>
            </div>
            <div className='col text-right'>
              <p>Social icon links</p>
              <p>© 2019 themotobible.com All Rights Reserved</p>
            </div>
          </div>
        </footer>

      </div>

    </Router>
    );
  }
};

export default App;
