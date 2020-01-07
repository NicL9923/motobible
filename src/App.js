import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import fire from "./firebase";
import logo from "./resources/motoBibleLogo.png";

import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/subcomponents/FooterComponent";
import BlogComponent from "./components/BlogComponent";
import BlogPost from "./components/subcomponents/BlogPost";
import ChatroomComponent from "./components/ChatroomComponent";
import MinigamesComponent from "./components/MinigamesComponent";
import ResourcesComponent from "./components/ResourcesComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import AdminComponent from "./components/AdminComponent";
import LogoutComponent from "./components/LogoutComponent";
import DonateComponent from "./components/DonateComponent";
import StoreComponent from "./components/StoreComponent";
import PageNotFound from "./components/subcomponents/PageNotFound";
import TermsComponent from "./components/TermsComponent";
import PrivacyComponent from "./components/PrivacyComponent";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userEmail: ""
    }
  }

  authCheck = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        if (user.email) {
          this.setState({ userEmail: user.email });
        }
        else {
          this.setState({ userEmail: user.providerData.forEach(profile => { return profile.email; })});
        }
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
            <img src={logo} width="45" height="45" alt="TheMotoBible.com"/>
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
              <li className="nav-item">
                <Link to="/store" className="nav-link">Store</Link>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end">
              {/*If the user is signed in, display Logout, otherwise Login/Register*/}
              {this.state.user ? (<Link to="/logout" className="nav-link my-auto">Logout</Link>) : (<><li className="nav-item my-auto"><Link to="/login" className="nav-link">Login</Link></li>
                                        <li className="nav-item my-auto"><Link to="/register" className="nav-link">Register</Link></li></>)}
              <li className="nav-item"><Link to="/donate" className="nav-link"><button className="btn btn-info">Support Us</button></Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={HomeComponent}/>
          
          <Route path="/blog" exact component={BlogComponent}/>
          <Route path="/blog/:year/:month/:day" component={BlogPost}/>

          <Route path="/chatroom" component={ChatroomComponent}/>
          <Route path="/minigames" component={MinigamesComponent}/>
          <Route path="/resources" component={ResourcesComponent}/>
          <Route path="/donate" component={DonateComponent}/>
          <Route path="/store" component={StoreComponent}/>

          <Route path="/login" component={LoginComponent}/>
          <Route path="/register" component={RegisterComponent}/>
          <Route path="/logout" component={LogoutComponent}/>

          <Route path="/admin" component={AdminComponent}/>
          <Route path="/terms" component={TermsComponent}/>
          <Route path="/privacy" component={PrivacyComponent}/>

          <Route component={PageNotFound}/>
        </Switch>

        <FooterComponent/>
      </div>
    </Router>
    );
  }
};

export default App;