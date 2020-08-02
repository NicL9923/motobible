import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import './stylesheets/stylesheet.css';
import './stylesheets/mobileStyles.css';

import Navbar from './components/subcomponents/Navbar';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/subcomponents/FooterComponent';
import BlogComponent from './components/BlogComponent';
import BlogPost from './components/subcomponents/BlogPost';
import ChatroomComponent from './components/ChatroomComponent';
import MinigamesComponent from './components/MinigamesComponent';
import ResourcesComponent from './components/ResourcesComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import AdminComponent from './components/AdminComponent';
import LogoutComponent from './components/LogoutComponent';
import DonateComponent from './components/DonateComponent';
import StoreComponent from './components/StoreComponent';
import PageNotFound from './components/subcomponents/PageNotFound';
import TermsComponent from './components/TermsComponent';
import PrivacyComponent from './components/PrivacyComponent';


firebase.initializeApp({
  apiKey: "AIzaSyC8Jnl2-Iokp_abToBacIn57al_arwJBF4",
  authDomain: "motobible.firebaseapp.com",
  databaseURL: "https://motobible.firebaseio.com",
  projectId: "motobible",
  storageBucket: "motobible.appspot.com",
  messagingSenderId: "764008121202",
  appId: "1:764008121202:web:f242e5f71357d624c953eb",
  measurementId: "G-28LRZ7FRR6"
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userEmail: ""
    }
  }

  authCheck = () => {
    firebase.auth().onAuthStateChanged(user => {
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
        <Navbar user={this.state.user}/>
        
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